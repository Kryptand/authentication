import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'register-form',
  styleUrl: 'register-form.css',
  shadow: true,
})
export class RegisterForm {
  @Event() formSubmit: EventEmitter<{ email: string; password: string }>;
  render() {
    return (
      <kryptand-login-register-form
        buttonLabel="registerButtonText"
        onLogFormSubmit={(ev) => this.formSubmit.emit(ev.detail)}
      />
    );
  }
}
