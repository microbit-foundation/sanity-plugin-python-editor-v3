/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaPaperclip as linkIcon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

import {translatableReferenceOptions} from '../common/translatable'

const toolkitInternalLink = defineType({
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
})

export default toolkitInternalLink
