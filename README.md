# Python Editor V3 Sanity schemas

This plugin contains the Sanity schemas used to manage content for the Micro:bit Educational
Foundation Python Editor V3 ([deployment](https://python.microbit.org/v/3),
[GitHub](https://github.com/microbit-foundation/python-editor-v3/)).

These are provided for developers who want to build alternative versions of the Python
Editor so they can provide custom Reference and Ideas content.

Please note that the Reference and Ideas content used in the Python Editor V3 is not
itself Open Source.

This project is provided in the hope it may be useful. The Micro:bit Educational Foundation
are unable to provide significant support for its use.

## Installation

```sh
npm install @microbit/sanity-plugin-python-editor-v3
```

## Usage

> This is a **Sanity Studio v6** plugin. It is published as an ES module only.

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import {
  pythonEditor,
  structure,
} from '@microbit/sanity-plugin-python-editor-v3';

export default defineConfig({
  // ...
  plugins: [structureTool({ structure }), pythonEditor()],
  schema: {
    // All necessary types are provided by the plugin.
    types: [],
  },
});
```

Using the exported structure is optional.

If you need to augment the types defined in this plugin then you can transform them in
your app by providing a [function as the types field](https://www.sanity.io/docs/schema-types).

The Python Editor expects some minimum content:

- A document of type `pythonIdeasConfig` with the ID `pythonIdeasConfig` and language "en".
  If you use the suggested desk structure you can just publish the document under Ideas > Config.
- A document of type `toolkit` with the name "Reference" and language "en".

You'll want to add additional content otherwise the tabs will be blank but this is the minimum
needed to avoid errors.

## Develop & test

```sh
npm install
npm run ci # lint, format check and build
```

To try changes in a studio, run `npm run build` and install this directory into the
studio project with `npm install /path/to/sanity-plugin-python-editor-v3`.

## License

This software is under the MIT open source license.

[SPDX-License-Identifier: MIT](LICENSE)

We use dependencies via the NPM registry as specified by the package.json file under common Open Source licenses.

Full details of each package can be found by running `license-checker`:

```bash
$ npx license-checker --direct --summary --production
```

Omit the flags as desired to obtain more detail.

## Code of Conduct

Trust, partnership, simplicity and passion are our core values we live and
breathe in our daily work life and within our projects. Our open-source
projects are no exception. We have an active community which spans the globe
and we welcome and encourage participation and contributions to our projects
by everyone. We work to foster a positive, open, inclusive and supportive
environment and trust that our community respects the micro:bit code of
conduct. Please see our [code of conduct](https://microbit.org/safeguarding/)
which outlines our expectations for all those that participate in our
community and details on how to report any concerns and what would happen
should breaches occur.
