import { newSpecPage } from '@stencil/core/testing';
import { InputWithIcon } from './input-with-icon';

describe('input-with-icon', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [InputWithIcon],
      html: '<input-with-icon></input-with-icon>'
    });
    expect(root).toEqualHtml(`
      <input-with-icon>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </input-with-icon>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [InputWithIcon],
      html: `<input-with-icon first="Stencil" last="'Don't call me a framework' JS"></input-with-icon>`
    });
    expect(root).toEqualHtml(`
      <input-with-icon first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </input-with-icon>
    `);
  });
});
