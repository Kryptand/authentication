import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nav-back-button',
  styleUrl: 'nav-back-button.css',
  shadow: true,
})
export class NavBackButton {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return `${this.first} ${this.middle}, ${this.last}`;
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
