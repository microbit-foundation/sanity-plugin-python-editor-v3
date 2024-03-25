/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {defineField, defineType} from 'sanity'

const python = defineType({
  title: 'Python',
  name: 'python',
  type: 'object',
  fields: [
    defineField({
      name: 'main',
      title: 'Main Python file',
      type: 'text',
    }),
  ],
})

export default python
