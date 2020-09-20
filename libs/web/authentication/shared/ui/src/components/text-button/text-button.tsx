import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kryptand-text-button',
  styleUrl: 'text-button.css',
  shadow: false,
})
export class TextButton {
  @Prop() type: string;

  render() {
    return (
      <button type={this.type}>
        <slot/>
      </button>
    );
  }
}
