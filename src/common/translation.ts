/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {defineField, ReferenceOptions} from 'sanity'

// This excludes translated documents marked with metadata added by the Foundation's
// Sanity-aware translation system. It should otherwise have no impact as the field
// is not part of this schema.
export const translatableReferenceOptions: ReferenceOptions = {
  filter: '!defined(translationOf)',
}

/**
 * We augment the sanity defintions to allow for translation metadata.
 */
declare module 'sanity' {
  export interface BaseSchemaDefinition {
    translatable?: boolean
  }
  export interface FieldDefinitionBase {
    translatable?: boolean
  }
}

/**
 * This field has a value of "en" set by initial value templates.
 *
 * The Foundation CMS uses a Sanity-aware translation system that isn't available here
 * that uses additional fields for translation bookkeeping that aren't used by the
 * Python Editor app itself. In that system this is replaced by a hidden field.
 */
export const languageField = () =>
  defineField({
    title: 'Language',
    name: 'language',
    type: 'string',
    translatable: false,
    description: 'Language code as used in the Python Editor',
  })
