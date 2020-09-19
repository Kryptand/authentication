import { Component, h } from '@stencil/core';

@Component({
  tag: 'kryptand-introduction-card',
  styleUrl: 'introduction-card.css',
  shadow: true,
})
export class IntroductionCard {
  render() {
    return (
      <host>
        <div class="icon">
          <slot name="icon" />
        </div>
        <div class="title">
          <slot name="title" />
        </div>
        <div class="subtitle">
          <slot name="subtitle" />
        </div>
        <div class="form">
          <slot name="form" />
        </div>
        <div class="social-login">
          <slot name="social-login" />
        </div>
        <div class="mode-switch">
          <slot name="mode-switch"/>
        </div>
      </host>
    );
  }
}
