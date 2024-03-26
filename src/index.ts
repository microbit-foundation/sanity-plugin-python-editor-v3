/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {definePlugin, SchemaTypeDefinition} from 'sanity'

import {portableTextFactory} from './schemas/portableText'
import python from './schemas/python'
import pythonIdea from './schemas/pythonIdea'
import pythonIdeasConfig from './schemas/pythonIdeasConfig'
import pythonModule from './schemas/pythonModule'
import pythonModuleItem from './schemas/pythonModuleItem'
import simpleImage from './schemas/simpleImage'
import structure from './schemas/structure'
import toolkit from './schemas/toolkit'
import toolkitAlternativeContent from './schemas/toolkitAlternativeContent'
import toolkitApiLink from './schemas/toolkitApiLink'
import toolkitInternalLink from './schemas/toolkitInternalLink'
import toolkitTopic from './schemas/toolkitTopic'
import toolkitTopicEntry from './schemas/toolkitTopicEntry'

export interface PythonEditorPluginConfig {
  overrides?: {
    externalLink?: SchemaTypeDefinition
    simpleImage?: SchemaTypeDefinition
    python?: SchemaTypeDefinition
  }
}

export const pythonEditor = definePlugin((userConfig: PythonEditorPluginConfig | void) => {
  const config = userConfig ?? {}
  const types = [
    portableTextFactory(config),
    pythonIdea,
    pythonIdeasConfig,
    pythonModule,
    pythonModuleItem,
    toolkit,
    toolkitAlternativeContent,
    toolkitApiLink,
    toolkitInternalLink,
    toolkitTopic,
    toolkitTopicEntry,
  ]
  if (!config.overrides?.python) {
    types.push(python)
  }
  if (!config.overrides?.simpleImage) {
    types.push(simpleImage)
  }
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
  toolkitApiLink,
  toolkitInternalLink,
  toolkitTopic,
  toolkitTopicEntry,
}
