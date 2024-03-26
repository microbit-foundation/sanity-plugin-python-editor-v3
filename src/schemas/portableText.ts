/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {
  FaExternalLinkAlt as ExternalLinkIcon,
  FaFileAlt as textIcon,
  FaPaperclip as linkIcon,
} from 'react-icons/fa'
import {defineArrayMember, defineField, defineType} from 'sanity'

import {translatableReferenceOptions} from '../common/translation'

const portableText = defineType({
  name: 'toolkitContent',
  title: 'toolkitContent',
  type: 'array',
  icon: textIcon,
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H3', value: 'h3'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Code', value: 'code'},
        ],
        annotations: [
          {
            name: 'toolkitApiLink',
            type: 'object',
            title: 'Python API link',
            icon: linkIcon,
            fields: [
              defineField({
                name: 'name',
                description: 'Fully qualified name, e.g. microbit.compass.get_x',
                type: 'string',
              }),
            ],
          },
          {
            name: 'toolkitInternalLink',
            type: 'object',
            title: 'Internal link',
            icon: linkIcon,
            fields: [
              defineField({
                name: 'reference',
                type: 'reference',
                options: translatableReferenceOptions,
                to: [{type: 'toolkitTopicEntry'}, {type: 'toolkitTopic'}],
              }),
            ],
          },
          {
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
          },
        ],
      },
    }),
    {type: 'python'},
    {type: 'simpleImage'},
  ],
})

export default portableText
