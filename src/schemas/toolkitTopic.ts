/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineArrayMember, defineField, defineType} from 'sanity'

import {languageField, translatableReferenceOptions} from '../common/translation'
import {productsField} from './products'
import {slugField} from './slugs'

/**
 * Used as a toolkit topic in the "Reference" tab of the Python editor.
 * field: Content - to reference toolkit topic entries for the topic
 */
const toolkitTopic = defineType({
  title: 'Topic',
  name: 'toolkitTopic',
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
      description: 'The products this topic is compatible with',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      description: `An SVG icon for this topic.`,
    }),
    defineField({
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      description: 'A very brief subtitle shown in the topic list.',
      translatable: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Introduction',
      name: 'introduction',
      type: 'toolkitContent',
      description: 'A short introduction shown when viewing the topic.',
      translatable: true,
    }),
    defineField({
      title: 'Contents',
      name: 'contents',
      type: 'array',
      translatable: true,
      of: [
        defineArrayMember({
          type: 'reference',
          options: translatableReferenceOptions,
          to: [{type: 'toolkitTopicEntry'}],
        }),
      ],
    }),
  ],
})

export default toolkitTopic
