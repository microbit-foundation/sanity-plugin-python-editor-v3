/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import { DocumentIcon } from '@sanity/icons';
import type { StructureBuilder } from 'sanity/structure';

export const sourceDocumentTypeList = (S: StructureBuilder, type: string) =>
  S.documentTypeList(type)
    .apiVersion('v2023-10-26')
    .filter('_type == $type && !defined(translationOf)');

export const singletonPage = (
  S: StructureBuilder,
  id: string,
  title: string,
  type?: string
) =>
  S.listItem()
    .id(id)
    .title(title)
    .icon(DocumentIcon)
    .child(
      S.document()
        .id(id)
        .title(title)
        .schemaType(type || id)
        .documentId(id)
    );
