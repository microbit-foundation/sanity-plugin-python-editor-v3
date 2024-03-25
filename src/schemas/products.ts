/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {defineField} from 'sanity'

const microbitV1 = {
  title: 'micro:bit v1',
  value: 'microbitV1',
}
const microbitV2 = {
  title: 'micro:bit v2',
  value: 'microbitV2',
}

const products = [microbitV1, microbitV2]

export const productsField = (overrides: {description?: string}) =>
  defineField({
    title: 'Compatibility',
    name: 'compatibility',
    type: 'array',
    description: 'The products that this task is compatible with',
    of: [{type: 'string'}],
    options: {
      list: [...products],
    },
    ...overrides,
  })

export default products
