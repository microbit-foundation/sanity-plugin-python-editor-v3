/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
import {
  defineField,
  type SlugDefinition,
  type SlugIsUniqueValidator,
} from 'sanity';

import { isSlugUnique, slugify } from '../common/slugs.js';

export const slugField = (overrides: Partial<SlugDefinition> = {}) =>
  defineField({
    title: 'Slug',
    name: 'slug',
    description: 'URL component or ID based on the name',
    type: 'slug',
    options: {
      source: 'name',
      slugify,
      isUnique: isSlugUnique,
    },
    validation: (Rule) => Rule.required(),
    ...overrides,
  });

const altContentSlugIsUnique: SlugIsUniqueValidator = async (slug, context) => {
  const { document, parent, getClient } = context;
  const client = getClient({ apiVersion: '2022-02-23' });
  const id = document?._id;
  const key = (parent as { _key: string })._key;
  const result = await client.fetch<{ alternatives?: unknown } | null>(
    `*[_id == $id][0] {
        alternatives[!(_key == $key) && slug.current == $slug][0]
      }`,
    {
      id,
      key,
      slug,
    }
  );
  return !result?.alternatives;
};

export const altContentSlugField = () =>
  defineField({
    title: 'Slug',
    name: 'slug',
    description: 'URL component or ID based on the name',
    type: 'slug',
    options: {
      source: (_, { parent }) => {
        return (parent as { name: string }).name;
      },
      slugify,
      isUnique: altContentSlugIsUnique,
    },
    validation: (Rule) => Rule.required(),
  });
