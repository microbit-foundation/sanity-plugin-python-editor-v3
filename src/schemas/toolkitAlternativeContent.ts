/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

import {altContentSlugField} from './slugs'

const toolkitAlternativeContent = defineType({
  title: 'Alternative content',
  name: 'toolkitAlternativeContent',
  type: 'object',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      description: 'The name of the alternative, shown in the dropdown',
      translatable: true, // though sometimes code, for discussion!
      validation: (Rule) => Rule.required(),
    }),
    altContentSlugField(),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'toolkitContent',
      translatable: true,
    }),
  ],
})

export default toolkitAlternativeContent
