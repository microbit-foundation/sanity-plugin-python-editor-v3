/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineArrayMember, defineField, defineType} from 'sanity'

import {languageField, translatableReferenceOptions} from '../common/translation'
import {slugField} from './slugs'

/**
 * Used for the "Reference" tab of the Python editor. The document must be named
 * "Reference" for the document to be used.
 *
 * field: Entries - Used to link to toolkit topic(s) to serve as items in the
 * "Reference tab".
 */
const toolkit = defineType({
  title: 'Toolkit',
  name: 'toolkit',
  type: 'document',
  initialValue: {
    language: 'en',
  },
  fields: [
    languageField(),
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
