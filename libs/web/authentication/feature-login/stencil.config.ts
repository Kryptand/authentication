import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-authentication-feature-login',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../../dist/libs/web-authentication-feature-login/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../../../dist/libs/web-authentication-feature-login/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
