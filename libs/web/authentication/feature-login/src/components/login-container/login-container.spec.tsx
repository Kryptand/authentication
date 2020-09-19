import { newSpecPage } from '@stencil/core/testing';
import { LoginContainer } from './login-container';

describe('login-container', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [LoginContainer],
      html: '<login-container></login-container>'
    });
    expect(root).toEqualHtml(`
      <login-container>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </login-container>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [LoginContainer],
      html: `<login-container first="Stencil" last="'Don't call me a framework' JS"></login-container>`
    });
    expect(root).toEqualHtml(`
      <login-container first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </login-container>
    `);
  });
});
