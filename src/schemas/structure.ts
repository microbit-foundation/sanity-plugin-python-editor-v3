/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { FaCog as ConfigIcon } from 'react-icons/fa';
import type { StructureBuilder } from 'sanity/structure';

import {
  singletonPage,
  sourceDocumentTypeList,
} from '../common/structureUtils.js';

const structure = (S: StructureBuilder) =>
  S.list()
    .title('Python Editor')
    .items([
      S.listItem()
        .title('Ideas')
        .child(
          S.list()
            .id('python-ideas')
            .items([
              S.listItem()
                .title('Ideas')
                .child(sourceDocumentTypeList(S, 'pythonIdea')),
              singletonPage(S, 'pythonIdeasConfig', 'Config').icon(ConfigIcon),
            ])
        ),
      S.listItem()
        .title('Toolkits')
        .child(sourceDocumentTypeList(S, 'toolkit')),
      S.listItem()
        .title('Toolkit topics')
        .child(sourceDocumentTypeList(S, 'toolkitTopic')),
      S.listItem()
        .title('Toolkit topic entries')
        .child(sourceDocumentTypeList(S, 'toolkitTopicEntry')),
      S.listItem()
        .title('Python modules')
        .child(sourceDocumentTypeList(S, 'pythonModule')),
    ]);

export default structure;
