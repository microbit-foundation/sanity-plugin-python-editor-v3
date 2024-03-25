/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {FaCog as ConfigIcon, FaPython} from 'react-icons/fa'
import {StructureBuilder} from 'sanity/structure'

import {singletonPage, sourceDocumentTypeList} from '../common/structureUtils'

const structure = (S: StructureBuilder) =>
  S.listItem()
    .title('Python editor')
    .icon(FaPython)
    .child(
      S.list()
        .title('Python editor')
        .items([
          S.listItem()
            .title('Ideas')
            .child(
              S.list()
                .id('python-ideas')
                .items([
                  S.listItem().title('Ideas').child(sourceDocumentTypeList(S, 'pythonIdea')),
                  singletonPage(S, 'pythonIdeasConfig', 'Config').icon(ConfigIcon),
                ]),
            ),
          S.listItem().title('Toolkits').child(sourceDocumentTypeList(S, 'toolkit')),
          S.listItem().title('Toolkit topics').child(sourceDocumentTypeList(S, 'toolkitTopic')),
          S.listItem()
            .title('Toolkit topic entries')
            .child(sourceDocumentTypeList(S, 'toolkitTopicEntry')),
          S.listItem().title('Python modules').child(sourceDocumentTypeList(S, 'pythonModule')),
          singletonPage(S, 'pythonEditorConfig', 'Config').icon(ConfigIcon),
        ]),
    )

export default structure
