/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {FaFileAlt as textIcon} from 'react-icons/fa'
import {ArrayOfType, defineArrayMember, defineType, SchemaTypeDefinition} from 'sanity'

import {PythonEditorPluginConfig} from '..'
import externalLink from './externalLink'
import toolkitApiLink from './toolkitApiLink'
import toolkitInternalLink from './toolkitInternalLink'

export const portableTextFactory = (config: PythonEditorPluginConfig): SchemaTypeDefinition => {
  return defineType({
    name: 'toolkitContent',
    title: 'toolkitContent',
    type: 'array',
    icon: textIcon,
    of: [
      defineArrayMember({
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H3', value: 'h3'},
        ],
        marks: {
          decorators: [
            {title: 'Strong', value: 'strong'},
            {title: 'Code', value: 'code'},
          ],
          annotations: [
            toolkitInternalLink,
            toolkitApiLink,
            config.overrides.externalLink ?? externalLink,
            // There seems to be an issue with validation-related types here, hence the kludge.
          ] as unknown as ArrayOfType<'object' | 'reference', undefined>[],
        },
      }),
      {type: 'python'},
      {type: 'simpleImage'},
    ],
  })
}
