/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { definePlugin } from 'sanity';

import portableText from './schemas/portableText.js';
import python from './schemas/python.js';
import pythonIdea from './schemas/pythonIdea.js';
import pythonIdeasConfig from './schemas/pythonIdeasConfig.js';
import pythonModule from './schemas/pythonModule.js';
import pythonModuleItem from './schemas/pythonModuleItem.js';
import simpleImage from './schemas/simpleImage.js';
import structure from './schemas/structure.js';
import toolkit from './schemas/toolkit.js';
import toolkitAlternativeContent from './schemas/toolkitAlternativeContent.js';
import toolkitTopic from './schemas/toolkitTopic.js';
import toolkitTopicEntry from './schemas/toolkitTopicEntry.js';

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
  ];
  return {
    name: '@microbit/python-editor-v3-sanity',
    schema: {
      types,
    },
  };
});

export {
  pythonIdea,
  pythonIdeasConfig,
  pythonModuleItem,
  structure,
  toolkit,
  toolkitAlternativeContent,
  toolkitTopic,
  toolkitTopicEntry,
};
