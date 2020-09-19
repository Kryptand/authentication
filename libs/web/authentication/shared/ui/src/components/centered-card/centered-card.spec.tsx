import { newSpecPage } from '@stencil/core/testing';
import { CenteredCard } from './centered-card';

describe('centered-card', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [CenteredCard],
      html: '<centered-card></centered-card>'
    });
    expect(root).toEqualHtml(`
      <centered-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </centered-card>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [CenteredCard],
      html: `<centered-card first="Stencil" last="'Don't call me a framework' JS"></centered-card>`
    });
    expect(root).toEqualHtml(`
      <centered-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </centered-card>
    `);
  });
});
