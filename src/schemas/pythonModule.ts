/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

const pythonModule = defineType({
  title: 'Python module',
  name: 'pythonModule',
  type: 'document',
  fields: [
    defineField({
      title: 'Python module name',
      name: 'pythonModuleName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Reference Link',
      name: 'pythonModuleItem',
      type: 'array',
      of: [{type: 'pythonModuleItem'}],
    }),
  ],
})

export default pythonModule
