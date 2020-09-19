import { newSpecPage } from '@stencil/core/testing';
import { LoginForm } from './login-form';

describe('login-form', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [LoginForm],
      html: '<login-form></login-form>'
    });
    expect(root).toEqualHtml(`
      <login-form>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </login-form>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [LoginForm],
      html: `<login-form first="Stencil" last="'Don't call me a framework' JS"></login-form>`
    });
    expect(root).toEqualHtml(`
      <login-form first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </login-form>
    `);
  });
});
