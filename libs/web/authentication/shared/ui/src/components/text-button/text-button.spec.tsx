import { newSpecPage } from '@stencil/core/testing';
import { TextButton } from './text-button';

describe('text-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [TextButton],
      html: '<text-button></text-button>'
    });
    expect(root).toEqualHtml(`
      <text-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </text-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [TextButton],
      html: `<text-button first="Stencil" last="'Don't call me a framework' JS"></text-button>`
    });
    expect(root).toEqualHtml(`
      <text-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </text-button>
    `);
  });
});
