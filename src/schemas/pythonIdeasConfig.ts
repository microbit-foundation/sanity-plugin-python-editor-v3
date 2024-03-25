/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineArrayMember, defineField, defineType} from 'sanity'

import {alwaysTranslatable, translatableReferenceOptions} from '../common/translatable'

const pythonIdeasConfig = defineType({
  title: 'Ideas config',
  name: 'pythonIdeasConfig',
  type: 'document',
  initialValue: {
    language: 'en',
  },
  fields: [
    ...alwaysTranslatable(),
    defineField({
      name: 'pythonIdeasOrder',
      title: 'Python ideas order',
      type: 'array',
      translatable: true,
      description: 'Ideas listed in the sequence they will appear in the Python Editor.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'pythonIdea'}],
          options: translatableReferenceOptions,
        }),
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})

export default pythonIdeasConfig
