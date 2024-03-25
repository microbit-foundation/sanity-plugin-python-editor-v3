/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaCog as ConfigIcon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

const pythonEditorConfig = defineType({
  title: 'Python Editor Config',
  name: 'pythonEditorConfig',
  type: 'document',
  icon: ConfigIcon,
  fields: [
    defineField({
      name: 'welcomeVideo',
      title: 'Link to YouTube video embedded in the welcome dialog.',
      type: 'youtubeVideo',
    }),
  ],
})

export default pythonEditorConfig
