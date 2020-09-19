import { Component, h } from '@stencil/core';

@Component({
  tag: 'kryptand-centered-card',
  styleUrl: 'centered-card.css',
  shadow: true,
})
export class CenteredCard {
  render() {
    return (
      <host>
        <slot />
      </host>
    );
  }
}
