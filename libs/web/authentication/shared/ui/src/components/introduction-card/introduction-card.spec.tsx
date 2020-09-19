import { newSpecPage } from '@stencil/core/testing';
import { IntroductionCard } from './introduction-card';

describe('introduction-card', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [IntroductionCard],
      html: '<introduction-card></introduction-card>'
    });
    expect(root).toEqualHtml(`
      <introduction-card>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </introduction-card>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [IntroductionCard],
      html: `<introduction-card first="Stencil" last="'Don't call me a framework' JS"></introduction-card>`
    });
    expect(root).toEqualHtml(`
      <introduction-card first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </introduction-card>
    `);
  });
});
