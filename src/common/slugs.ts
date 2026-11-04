/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

import type { Path, SlugIsUniqueValidator } from 'sanity';

export const slugify = (input: string) =>
  input
    .trim()
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 200);

function getDocumentIds(id: string | undefined) {
  const isDraft = id?.indexOf('drafts.') === 0;
  return {
    published: isDraft ? id.slice('drafts.'.length) : id,
    draft: isDraft ? id : `drafts.${id}`,
  };
}

function serializePath(path: Path) {
  return path.reduce<string>((target, part, i) => {
    // Array items (by index or _key) match any item in GROQ.
    const add =
      typeof part === 'string' ? `${i === 0 ? '' : '.'}${part}` : '[]';
    return `${target}${add}`;
  }, '');
}

export const isSlugUnique: SlugIsUniqueValidator = (slug, context) => {
  const { document, path, getClient } = context;
  const client = getClient({ apiVersion: '2022-02-23' });
  const { published, draft } = getDocumentIds(document?._id);
  const docType = document?._type;
  const atPath = path && serializePath(path.concat('current'));

  const constraints = [
    '_type == $docType',
    '!defined(translationOf)',
    `!(_id in [$draft, $published])`,
    `${atPath} == $slug`,
  ].join(' && ');

  return client.fetch(`!defined(*[${constraints}][0]._id)`, {
    docType,
    draft,
    published,
    slug,
  });
};
