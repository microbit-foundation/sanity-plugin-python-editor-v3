/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

import {languageField} from '../common/translation'
import {productsField} from './products'
import {slugField} from './slugs'

/**
 * Used as the content of a toolkit topic in the "Reference" tab of the editor.
 */
const toolkitTopicEntry = defineType({
  title: 'Topic entry',
  name: 'toolkitTopicEntry',
  type: 'document',
  initialValue: {
    language: 'en',
    compatibility: ['microbitV1', 'microbitV2'],
  },
  fields: [
    languageField(),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      translatable: true,
      validation: (Rule) => Rule.required(),
    }),
    slugField(),
    productsField({
      description: 'The products this topic entry is compatible with',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'toolkitContent',
      translatable: true,
    }),
    defineField({
      title: 'Alternative content label',
      name: 'alternativesLabel',
      description:
        'Label for alternative content drop-down. Required if alternative content is provided.',
      type: 'string',
      translatable: true,
    }),
    defineField({
      title: 'Alternative content',
      description: 'Optional alternative content sections that can be chosen via a drop-down',
      name: 'alternatives',
      type: 'array',
      of: [{type: 'toolkitAlternativeContent'}],
      translatable: true,
    }),
    defineField({
      title: 'Detailed content',
      description: 'Shown after the main content in the detail view',
      name: 'detailContent',
      type: 'toolkitContent',
      translatable: true,
    }),
  ],
  validation: (Rule) =>
    Rule.custom((document) => {
      const completed =
        (Array.isArray(document?.alternatives) && document.alternatives.length > 0 ? 1 : 0) +
        (document?.alternativesLabel ? 1 : 0)
      return completed === 1
        ? 'If alternative content is provided both the label and sections must be set.'
        : true
    }),
})

export default toolkitTopicEntry
