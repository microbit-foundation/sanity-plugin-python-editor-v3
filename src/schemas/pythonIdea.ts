/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

import {alwaysTranslatable} from '../common/translatable'
import {productsField} from './products'
import {slugField} from './slugs'

const pythonIdea = defineType({
  title: 'Idea',
  name: 'pythonIdea',
  type: 'document',
  initialValue: {
    language: 'en',
    compatibility: ['microbitV1', 'microbitV2'],
  },
  fields: [
    ...alwaysTranslatable(),
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
