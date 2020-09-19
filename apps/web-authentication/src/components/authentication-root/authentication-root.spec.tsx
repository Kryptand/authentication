import { newSpecPage } from '@stencil/core/testing';
import { AuthenticationRoot } from './authentication-root';

describe('authentication-root', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [AuthenticationRoot],
      html: '<authentication-root></authentication-root>'
    });
    expect(root).toEqualHtml(`
      <authentication-root>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </authentication-root>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [AuthenticationRoot],
      html: `<authentication-root first="Stencil" last="'Don't call me a framework' JS"></authentication-root>`
    });
    expect(root).toEqualHtml(`
      <authentication-root first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </authentication-root>
    `);
  });
});
