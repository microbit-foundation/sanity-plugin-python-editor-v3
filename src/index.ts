/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {definePlugin} from 'sanity'

import portableText from './schemas/portableText'
import python from './schemas/python'
import pythonIdea from './schemas/pythonIdea'
import pythonIdeasConfig from './schemas/pythonIdeasConfig'
import pythonModule from './schemas/pythonModule'
import pythonModuleItem from './schemas/pythonModuleItem'
import simpleImage from './schemas/simpleImage'
import structure from './schemas/structure'
import toolkit from './schemas/toolkit'
import toolkitAlternativeContent from './schemas/toolkitAlternativeContent'
import toolkitTopic from './schemas/toolkitTopic'
import toolkitTopicEntry from './schemas/toolkitTopicEntry'

export const pythonEditor = definePlugin(() => {
  const types = [
    portableText,
    pythonIdea,
    pythonIdeasConfig,
    pythonModule,
    pythonModuleItem,
    toolkit,
    toolkitAlternativeContent,
    toolkitTopic,
    toolkitTopicEntry,
    python,
    simpleImage,
  ]
  return {
    name: '@microbit/python-editor-v3-sanity',
    schema: {
      types,
    },
  }
})

export {
  pythonIdea,
  pythonIdeasConfig,
  pythonModuleItem,
  structure,
  toolkit,
  toolkitAlternativeContent,
  toolkitTopic,
  toolkitTopicEntry,
}
