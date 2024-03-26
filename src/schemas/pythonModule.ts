/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

/**
 * Used to add and link a "Help" button on the Python editor autocomplete prompt
 * for a specific Python function to content in the "Reference" tab
 *
 * field: Python module name - name of python module e.g. "gc"
 * field: Reference Link item
 *  param: API entry - name of functions in the module e.g. "enable", "collect"
 *  param: Reference Link - Link to toolkit topic / toolkit topic entry
 */
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
