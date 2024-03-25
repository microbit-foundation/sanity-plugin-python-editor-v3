/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaExternalLinkAlt as ExternalLinkIcon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

const externalLink = defineType({
  name: 'link',
  type: 'object',
  title: 'External link',
  icon: ExternalLinkIcon,
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})

export default externalLink
