import { newSpecPage } from '@stencil/core/testing';
import { RegisterContainer } from './register-container';

describe('register-container', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [RegisterContainer],
      html: '<register-container></register-container>'
    });
    expect(root).toEqualHtml(`
      <register-container>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </register-container>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [RegisterContainer],
      html: `<register-container first="Stencil" last="'Don't call me a framework' JS"></register-container>`
    });
    expect(root).toEqualHtml(`
      <register-container first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </register-container>
    `);
  });
});
