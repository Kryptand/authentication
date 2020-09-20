import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kryptand-register-container',
  styleUrl: 'register-container.css',
  shadow: true,
})
export class RegisterContainer {
  @Prop() theme: 'light' | 'dark';
  private handleFormSubmit(ev: CustomEvent<any>) {
    const { detail } = ev;
    console.debug('handleLoginWithCredentials', detail);
  }
  private handleGoogleButtonClick() {
    console.debug('google');
  }
  private handleFacebookButtonClick() {
    console.debug('facebook');
  }
  private handleTwitterButtonClick() {
    console.debug('twitter');
  }
  private handleGithubButtonClick() {
    console.debug('github');
  }
  render() {
    return (
      <host>
        <div class={'flex-container theme-container ' + this.theme}>
          <kryptand-centered-card>
            <kryptand-introduction-card>
              <kryptand-product-icon slot="icon" />
              <kryptand-translate name="registerTitle" slot="title" />
              <kryptand-translate name="registerSubtitle" slot="subtitle" />
              <kryptand-register-form
                onFormSubmit={(ev) => this.handleFormSubmit(ev)}
                slot="form"
              />
              <kryptand-external-logins
                onGoogleButtonClicked={() => this.handleGoogleButtonClick()}
                onFacebookButtonClicked={() => this.handleFacebookButtonClick()}
                onTwitterButtonClicked={() => this.handleTwitterButtonClick()}
                onGithubButtonClicked={() => this.handleGithubButtonClick()}
                slot="social-login"
              />
              <div slot="mode-switch">
                <kryptand-translate name="noAccount" />
                <a href="/bla" class="switch-type">
                  <kryptand-translate name="login" />
                </a>
              </div>
            </kryptand-introduction-card>
          </kryptand-centered-card>
        </div>
      </host>
    );
  }
}
