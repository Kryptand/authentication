import { newSpecPage } from '@stencil/core/testing';
import { RegisterForm } from './register-form';

describe('register-form', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [RegisterForm],
      html: '<register-form></register-form>'
    });
    expect(root).toEqualHtml(`
      <register-form>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </register-form>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [RegisterForm],
      html: `<register-form first="Stencil" last="'Don't call me a framework' JS"></register-form>`
    });
    expect(root).toEqualHtml(`
      <register-form first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </register-form>
    `);
  });
});
