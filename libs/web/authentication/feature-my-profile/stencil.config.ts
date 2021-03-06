import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-authentication-feature-my-profile',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../../dist/libs/web-authentication-feature-my-profile/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../../../dist/libs/web-authentication-feature-my-profile/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
