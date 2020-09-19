import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-authentication-feature-register',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../../../dist/libs/web-authentication-feature-register/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../../../dist/libs/web-authentication-feature-register/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
