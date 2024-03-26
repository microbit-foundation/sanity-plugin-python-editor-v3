/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineArrayMember, defineField, defineType} from 'sanity'

import {languageField, translatableReferenceOptions} from '../common/translation'

/**
 * Used to configure visible items in the "Ideas" tab of the editor.
 *
 * field: Python ideas order - references Python Ideas documents
 */
const pythonIdeasConfig = defineType({
  title: 'Ideas config',
  name: 'pythonIdeasConfig',
  type: 'document',
  initialValue: {
    language: 'en',
  },
  fields: [
    languageField(),
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
