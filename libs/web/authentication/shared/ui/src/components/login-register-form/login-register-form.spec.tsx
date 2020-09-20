import { newSpecPage } from '@stencil/core/testing';
import { LoginRegisterForm } from './login-register-form';

describe('login-register-form', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [LoginRegisterForm],
      html: '<login-register-form></login-register-form>'
    });
    expect(root).toEqualHtml(`
      <login-register-form>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </login-register-form>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [LoginRegisterForm],
      html: `<login-register-form first="Stencil" last="'Don't call me a framework' JS"></login-register-form>`
    });
    expect(root).toEqualHtml(`
      <login-register-form first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </login-register-form>
    `);
  });
});
