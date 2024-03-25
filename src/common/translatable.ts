/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// This is a simplified version of the translation metadata used by Micro:bit Educational Foundation
// to manage translations via Crowdin.

import {defineField, ReferenceOptions} from 'sanity'

export const translatableReferenceOptions: ReferenceOptions = {
  filter: '!defined(translationOf)',
}

/**
 * We augment the sanity defintions to allow for translation metadata.
 */
declare module 'sanity' {
  // Used to extend type definition to accept `translatable` key
  export interface BaseSchemaDefinition {
    translatable?: boolean
  }

  // Used to extend field definition to accept `translatable` key
  export interface FieldDefinitionBase {
    translatable?: boolean
  }
}

/**
 * Common schema fields for translatable documents.
 *
 * We also mark the schema fields with a translatable flag.
 */
const translatableFields = [
  defineField({
    title: 'Language',
    name: 'language',
    type: 'string',
    translatable: false,
    hidden: true,
    description:
      'Internal field tracking the language of this document.  Translations only for now.',
  }),
  defineField({
    title: 'Translation of',
    name: 'translationOf',
    // This is effectively a weak reference but as it's managed outside of Sanity we're just using a string.
    type: 'string',
    translatable: false,
    hidden: true,
    readOnly: true,
    description:
      'Internal field tracking which document this is a translation of. If the field is missing, this document is a source document.',
  }),
  defineField({
    title: 'Source document Crowdin info',
    name: 'crowdinSourceDetails',
    type: 'reference',
    options: translatableReferenceOptions,
    translatable: false,
    to: [{type: 'crowdinSourceDetails'}],
    hidden: true,
    readOnly: true,
    description: 'Reference to the Crowdin source information if this is a source document.',
  }),
  defineField({
    title: 'Last Crowdin hash',
    name: 'lastCrowdinHash',
    type: 'string',
    translatable: false,
    hidden: true,
    readOnly: true,
    description:
      'Internal field with a hash of the last content we wrote to Sanity from Crowdin. Translations only.',
  }),
]

export const alwaysTranslatable = () => [...translatableFields]
