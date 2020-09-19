import { newSpecPage } from '@stencil/core/testing';
import { ProductIcon } from './product-icon';

describe('product-icon', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ProductIcon],
      html: '<product-icon></product-icon>'
    });
    expect(root).toEqualHtml(`
      <product-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </product-icon>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ProductIcon],
      html: `<product-icon first="Stencil" last="'Don't call me a framework' JS"></product-icon>`
    });
    expect(root).toEqualHtml(`
      <product-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </product-icon>
    `);
  });
});
