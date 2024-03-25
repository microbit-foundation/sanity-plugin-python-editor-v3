/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

import {translatableReferenceOptions} from '../common/translatable'
import AlternativeContentList from './AlternativeContentList'

const pythonModuleItem = defineType({
  title: 'Module item',
  name: 'pythonModuleItem',
  type: 'document',
  preview: {
    select: {
      api: 'pythonApiEntry',
      topicOrTopicEntry: 'referenceLink.name',
      altContent: 'pythonAlternativeContentLink',
    },
    prepare(selection) {
      const {api, topicOrTopicEntry, altContent} = selection
      let subtitle = ''
      if (topicOrTopicEntry) {
        subtitle = `Reference link: ${topicOrTopicEntry} ${
          altContent ? `(${altContent})` : ''
        }`.trim()
      }
      return {
        title: api,
        subtitle: subtitle,
      }
    },
  },
  fields: [
    defineField({
      title: 'API entry',
      name: 'pythonApiEntry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Reference link',
      name: 'referenceLink',
      type: 'reference',
      to: [{type: 'toolkitTopic'}, {type: 'toolkitTopicEntry'}],
      description: 'Link to a toolkit topic or toolkit topic entry',
      options: translatableReferenceOptions,
      validation: (Rule) =>
        Rule.custom((_, context) => {
          const parent = context.parent as {
            referenceLink?: string
            pythonAlternativeContentLink?: string
          }
          return parent.pythonAlternativeContentLink && !parent.referenceLink
            ? 'A reference link must be set.'
            : true
        }),
    }),
    defineField({
      title: 'Alternative content link',
      name: 'pythonAlternativeContentLink',
      type: 'string',
      description: 'Link to alternative content dropdown.',
      components: {
        input: AlternativeContentList,
      },
    }),
  ],
})

export default pythonModuleItem
