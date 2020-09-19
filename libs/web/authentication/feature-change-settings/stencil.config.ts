import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-authentication-feature-change-settings',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir:
        '../../../../dist/libs/web-authentication-feature-change-settings/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir:
        '../../../../dist/libs/web-authentication-feature-change-settings/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
