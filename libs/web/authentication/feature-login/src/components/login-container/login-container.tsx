import { Component, h, Prop } from '@stencil/core';
import '@authentication/web/authentication/shared/ui';
import '@kryptand/transmono';

@Component({
  tag: 'kryptand-login-container',
  styleUrl: 'login-container.css',
  shadow: true,
})
export class LoginContainer {
  @Prop() theme: 'light' | 'dark';
  render() {
    return (
      <host>
        <div class={'theme-container ' + this.theme}>
          <kryptand-centered-card>
            <kryptand-introduction-card>
              <kryptand-product-icon slot="icon" />
              <kryptand-translate name="loginTitle" slot="title" />
              <kryptand-translate name="loginSubtitle" slot="subtitle" />
              <kryptand-login-form slot="form" />
              <kryptand-external-logins slot="social-logins" />
              <div slot="mode-switch">
                <kryptand-translate name="noAccount" />
                <a href="/bla">
                  <kryptand-translate name="register" />
                </a>
              </div>
            </kryptand-introduction-card>
          </kryptand-centered-card>
        </div>
      </host>
    );
  }
}
