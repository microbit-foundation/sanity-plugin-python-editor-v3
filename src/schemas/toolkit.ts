/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineArrayMember, defineField, defineType} from 'sanity'

import {alwaysTranslatable, translatableReferenceOptions} from '../common/translatable'
import {slugField} from './slugs'

const toolkit = defineType({
  title: 'Toolkit',
  name: 'toolkit',
  type: 'document',
  initialValue: {
    language: 'en',
  },
  fields: [
    ...alwaysTranslatable(),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The toolkit name',
      translatable: true,
      validation: (Rule) => Rule.required(),
    }),
    slugField(),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      description: 'Short description displayed below the toolkit name',
      translatable: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Entries',
      name: 'contents',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          options: translatableReferenceOptions,
          to: [{type: 'toolkitTopic'}],
        }),
      ],
    }),
  ],
})

export default toolkit
