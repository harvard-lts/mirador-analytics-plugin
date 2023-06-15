import Mirador from 'mirador/dist/es/src/index';
import miradorAnalyticsPlugin from '@harvard-lts/mirador-analytics-plugin';

const config = {
  id: 'demo',
  windows: [{
    loadedManifest: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
  }],
  miradorAnalyticsPlugin: {
    containerID:'GTM-XXXXXX',
  },
};

Mirador.viewer(config, [
  ...miradorAnalyticsPlugins,
]);
