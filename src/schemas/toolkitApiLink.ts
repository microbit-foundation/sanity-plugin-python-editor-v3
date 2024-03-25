/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaPython as linkIcon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

const toolkitApiLink = defineType({
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
})

export default toolkitApiLink
