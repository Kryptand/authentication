import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-authentication-shared-ui',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../../../dist/libs/web-authentication-shared-ui/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../../../../dist/libs/web-authentication-shared-ui/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
