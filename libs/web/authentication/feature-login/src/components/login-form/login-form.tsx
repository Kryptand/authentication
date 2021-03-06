import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'kryptand-login-form',
  styleUrl: 'login-form.css',
  shadow: true,
})
export class LoginForm {
  @Event() formSubmit: EventEmitter<{ email: string; password: string }>;
  render() {
    return (
      <kryptand-login-register-form
        buttonLabel="loginButtonText"
        onLogFormSubmit={(ev) => this.formSubmit.emit(ev.detail)}
      />
    );
  }
}
