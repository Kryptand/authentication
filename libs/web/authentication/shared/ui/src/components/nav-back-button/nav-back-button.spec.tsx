import { newSpecPage } from '@stencil/core/testing';
import { NavBackButton } from './nav-back-button';

describe('nav-back-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [NavBackButton],
      html: '<nav-back-button></nav-back-button>'
    });
    expect(root).toEqualHtml(`
      <nav-back-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </nav-back-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [NavBackButton],
      html: `<nav-back-button first="Stencil" last="'Don't call me a framework' JS"></nav-back-button>`
    });
    expect(root).toEqualHtml(`
      <nav-back-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </nav-back-button>
    `);
  });
});
