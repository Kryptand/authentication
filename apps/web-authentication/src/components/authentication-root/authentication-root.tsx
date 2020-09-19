import { Component, h } from '@stencil/core';
import '@kryptand/transmono';
import '@authentication/web/authentication/feature-login';
@Component({
  tag: 'authentication-root',
  styleUrl: 'authentication-root.css',
  shadow: true,
})
export class AuthenticationRoot {
  render() {
    return (
      <host>
        <kryptand-translation-provider defaultLang="en-US" />
        <kryptand-login-container />
      </host>
    );
  }
}
