/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Path, SlugIsUniqueValidator} from 'sanity'

export const slugify = (input: string) =>
  input
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 200)

function getDocumentIds(id: string | undefined) {
  const isDraft = id?.indexOf('drafts.') === 0
  return {
    published: isDraft ? id.slice('drafts.'.length) : id,
    draft: isDraft ? id : `drafts.${id}`,
  }
}

function serializePath(path: Path) {
  return path.reduce((target, part, i) => {
    const isIndex = typeof part === 'number'
    const isKey = part && (part as {_key: string})._key
    const separator = i === 0 ? '' : '.'
    const add = isIndex || isKey ? '[]' : `${separator}${part}`
    return `${target}${add}`
  }, '')
}

export const isSlugUnique: SlugIsUniqueValidator = (slug, context) => {
  const {document, path, getClient} = context
  const client = getClient({apiVersion: '2022-02-23'})
  const {published, draft} = getDocumentIds(document?._id)
  const docType = document?._type
  const atPath = path && serializePath(path.concat('current'))

  const constraints = [
    '_type == $docType',
    '!defined(translationOf)',
    `!(_id in [$draft, $published])`,
    `${atPath} == $slug`,
  ].join(' && ')

  return client.fetch(`!defined(*[${constraints}][0]._id)`, {
    docType,
    draft,
    published,
    slug,
  })
}
