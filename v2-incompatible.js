/**
 * (c) 2024, Micro:bit Educational Foundation and contributors
 *
 * SPDX-License-Identifier: MIT
 */
const {showIncompatiblePluginDialog} = require('@sanity/incompatible-plugin')
const {name, version, sanityExchangeUrl} = require('./package.json')

export default showIncompatiblePluginDialog({
  name: name,
  versions: {
    v3: version,
    v2: undefined,
  },
  sanityExchangeUrl,
})
