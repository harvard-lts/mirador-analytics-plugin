# mirador-analytics-plugin

Mirador plugin for analytics. Currently formatted for use with [Google Tag Manager](https://tagmanager.google.com/).

## Requirements

- [NVM](https://github.com/nvm-sh/nvm)

## Setup

1. Run `nvm use` to ensure your version of matches that in the `.nvmrc` file
2. Run `npm i` to install dependencies
3. Use one of the [NPM scripts](#npm-scripts) to perform the actions described below.

## NPM scripts

The following are some useful scripts can be ran using `npm run <script>`. A full list can be seen in [package.json](./package.json)

| Script  | Description                                                                                                                |
| ------- | -------------------------------------------------------------------------------------------------------------------------- |
| `clean` | Removes the `dist` directories                                                                                             |
| `build` | Builds the source files into the `./dist` directory                                                                        |
| `serve` | Runs a local web server where the plugin can be viewed in a vanilla Mirador instance (helpful for testing and development) |
| `test`  | Runs the automated test suites  

## Installing in Mirador

The `mirador-analytics-plugin` requires an instance of Mirador 3. Visit the [Mirador wiki](https://github.com/ProjectMirador/mirador/wiki) to learn how to [install an existing plugin](https://github.com/ProjectMirador/mirador/wiki/Mirador-3-plugins#installing-an-existing-plugin) and for additional information about plugins.

Package you will need to install:

```bash
npm i @harvard-lts/mirador-analytics-plugin
```

## Configuration

Configurations for this plugin are injected when Mirador is initialized under the `miradorAnalyticsPlugin` key. See the [demo entry](./demo/demoEntry.js) for an example of importing and configuring `mirador-analytics-plugin`.

```js
...
  id: 'mirador',
  miradorAnalyticsPlugin: {
    ...
  }
...
```

| Config Key | Type | Description |
| --- | --- | --- |
| `containerId` | string | ID assigned in [Google Tag Manager](https://tagmanager.google.com/), formatted as `GTM-XXXXXXX` (this can be found in the top right corner of the Workspace page) |

## Contribute
Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

[build-badge]: https://img.shields.io/travis/projectmirador/mirador-share-plugin/master.png?style=flat-square
[build]: https://travis-ci.org/projectmirador/mirador-share-plugin

[npm-badge]: https://img.shields.io/npm/v/mirador-share-plugin.png?style=flat-square
[npm]: https://www.npmjs.org/package/mirador-share-plugin