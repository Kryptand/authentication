import { newSpecPage } from '@stencil/core/testing';
import { ExternalLoginButton } from './external-login-button';

describe('external-login-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ExternalLoginButton],
      html: '<external-login-button></external-login-button>'
    });
    expect(root).toEqualHtml(`
      <external-login-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </external-login-button>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ExternalLoginButton],
      html: `<external-login-button first="Stencil" last="'Don't call me a framework' JS"></external-login-button>`
    });
    expect(root).toEqualHtml(`
      <external-login-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </external-login-button>
    `);
  });
});
