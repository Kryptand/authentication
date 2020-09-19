import {
  Component,
  h,
  Event,
  State,
  EventEmitter,
  Listen,
} from '@stencil/core';
import '@kryptand/transmono';
import { TranslationControllerInstance } from '@kryptand/transmono';

@Component({
  tag: 'kryptand-login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {
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

  @Event()
  @State()
  emailLabel: string;
  @State() passwordLabel: string;
  @State() email: string;
  @State() password: string;
  @Event() formSubmit: EventEmitter<{ email: string; password: string }>;
  handleSubmit(e) {
    e.preventDefault();
    this.formSubmit.emit({ email: this.email, password: this.password });
  }
  handleChange(event, property: keyof this) {
    this[property] = event.target.value;
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div class="form-group">
          <i></i>
          <input
            type="email"
            placeholder={this.emailLabel}
            value={this.email}
            onInput={(event) => this.handleChange(event, 'email')}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder={this.passwordLabel}
            value={this.password}
            onInput={(event) => this.handleChange(event, 'password')}
          />
        </div>
        <button type="submit">
          <kryptand-translate name="loginButtonText" />
        </button>
      </form>
    );
  }
}
