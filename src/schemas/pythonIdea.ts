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
 * Used for items in the "Ideas" tab of the editor. Items added in the
 * "Python ideas order" in the Ideas config document are visible.
 */
const pythonIdea = defineType({
  title: 'Idea',
  name: 'pythonIdea',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'This will be used on cards linking to this item.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'toolkitContent',
      translatable: true,
    }),
  ],
})

export default pythonIdea
