import {
  Component,
  Event,
  EventEmitter,
  h,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import '@kryptand/transmono';
import { TranslationControllerInstance } from '@kryptand/transmono';

@Component({
  tag: 'kryptand-login-register-form',
  styleUrl: 'login-register-form.css',
  shadow: true,
})
export class LoginRegisterForm {
  @Prop()
  buttonLabel: string;
  @State()
  emailLabel: string;
  @State() passwordLabel: string;
  @State() email: string;
  @State() password: string;
  @Event() logFormSubmit: EventEmitter<{ email: string; password: string }>;
  translatorInstance: HTMLKryptandTranslationProviderElement;
  async componentWillLoad() {
    const { instance } = TranslationControllerInstance;
    this.translatorInstance = instance;
    await this.translateLabels(instance);
  }

  private async translateLabels(
    instance: HTMLKryptandTranslationProviderElement
  ) {
    this.emailLabel = await instance.translateKey('mail');
    this.passwordLabel = await instance.translateKey('password');
  }

  @Listen('translationEntriesUpdated', { target: 'window' })
  async entriesUpdated() {
    if (this.translatorInstance == null) {
      return;
    }
    await this.translateLabels(this.translatorInstance);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.logFormSubmit.emit({ email: this.email, password: this.password });
  }
  handleChange(event, property: keyof this) {
    this[property] = event.target.value;
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="form-group" id="email-field">
          <span class="icon">
            <svg viewBox="0 0 893.3 713.4" xmlns="http://www.w3.org/2000/svg">
              <g data-name="Ebene 2">
                <g data-name="Ebene 1">
                  <path
                    d="M448.6 711c-596.1 1-415.3 70.3-444-622.3C4.3 37.4 50.2-3 100.7.2h699.4c23.9 0 45.2 6.7 63.2 22.8a88.3 88.3 0 0129.8 63.2q.4 266.7 0 533.4a89 89 0 01-91 91.4H448.6z"
                    fill="#818181"
                  />
                  <path
                    d="M451.4 395.3a85.4 85.4 0 01-47.2-13.8L116 201.2c-19.5-12.2-25.3-35.3-13.4-53.6a37.8 37.8 0 0151.9-11.2q147 91.6 293.7 183.8c89.6-43.3 175.7-109.8 264.1-160.8 23.5-12.5 48.8-41 76.6-23.5 24.5 13 24.1 50.8.4 64.4q-44.4 28-89 55.6l-201 125.8a86 86 0 01-47.9 13.6z"
                    fill="#fefefe"
                  />
                </g>
              </g>
            </svg>
          </span>
          <input
            type="email"
            placeholder={this.emailLabel}
            required
            autocomplete="email"
            value={this.email}
            onInput={(event) => this.handleChange(event, 'email')}
          />
        </div>
        <div class="form-group" id="password-field">
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Ebene 1"
              viewBox="0 0 534.4 701.2"
            >
              <path
                d="M267.2 701.1H67.3A66.6 66.6 0 01.1 634.6Q0 467.4.1 300.2c0-37.2 30.1-66.5 67.3-66.5h29.3c2.8 0 3.6-.7 3.6-3.5-.2-20.3 0-40.6-.1-60.9 0-40.4 12-76.6 37.7-107.9 26.7-32.5 61-52.9 102.6-59.2 57-8.6 106.3 8 146.8 48.9a161 161 0 0145.7 96.5c1.8 14.4 1.1 28.8 1.2 43.2v39.4c0 2.9.8 3.6 3.6 3.5h29.6a66.9 66.9 0 0166.4 58.6 77.4 77.4 0 01.6 9.8v330.6a67 67 0 01-54.2 67.2 62 62 0 01-13 1.3h-200z"
                fill="#818181"
              />
              <path
                d="M267 233.7H171c-3 0-4-.7-4-3.8v-64.7c.2-46.8 35.8-88.9 82-96.8a100.1 100.1 0 01116 76 92.8 92.8 0 012.5 21.5v63.5c0 3.3-.6 4.4-4.1 4.4-32-.2-64.2-.1-96.2-.1zM334 467.5a66.7 66.7 0 11-133.4-.2c.1-37 30.2-67 67-66.7a67 67 0 0166.3 67z"
                fill="#fefefe"
              />
            </svg>
          </span>
          <input
            type="password"
            placeholder={this.passwordLabel}
            value={this.password}
            required
            autocomplete="password"
            onInput={(event) => this.handleChange(event, 'password')}
          />
        </div>
        <kryptand-text-button id="submit-button" type="submit">
          <kryptand-translate name={this.buttonLabel} />
        </kryptand-text-button>
      </form>
    );
  }
}
