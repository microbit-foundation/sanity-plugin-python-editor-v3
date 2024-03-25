/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {DocumentIcon} from '@sanity/icons'
import React from 'react'
import {StructureBuilder} from 'sanity/structure'

export const sourceDocumentTypeList = (S: StructureBuilder, type: string) =>
  S.documentTypeList(type)
    .apiVersion('v2023-10-26')
    .filter('_type == $type && !defined(translationOf)')

export const singletonPage = (S: StructureBuilder, id: string, title: string, type?: string) =>
  S.listItem()
    .id(id)
    .title(title)
    // A future update wil likely fix this props incompatibility
    .icon(DocumentIcon as unknown as React.ComponentType)
    .child(
      S.document()
        .id(id)
        .title(title)
        .schemaType(type || id)
        .documentId(id),
    )
