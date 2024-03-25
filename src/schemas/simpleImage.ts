/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaImage as ImageIcon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

const simpleImage = defineType({
  title: 'Image',
  name: 'simpleImage',
  type: 'image',
  icon: ImageIcon,
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      translatable: true,
      description: 'Alternative text for users who cannot see the content',
    }),
  ],
})

export default simpleImage
