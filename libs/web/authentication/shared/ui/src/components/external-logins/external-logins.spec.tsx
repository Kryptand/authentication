import { newSpecPage } from '@stencil/core/testing';
import { ExternalLogins } from './external-logins';

describe('external-logins', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [ExternalLogins],
      html: '<external-logins></external-logins>'
    });
    expect(root).toEqualHtml(`
      <external-logins>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </external-logins>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [ExternalLogins],
      html: `<external-logins first="Stencil" last="'Don't call me a framework' JS"></external-logins>`
    });
    expect(root).toEqualHtml(`
      <external-logins first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </external-logins>
    `);
  });
});
