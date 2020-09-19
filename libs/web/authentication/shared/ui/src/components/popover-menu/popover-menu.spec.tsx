import { newSpecPage } from '@stencil/core/testing';
import { PopoverMenu } from './popover-menu';

describe('popover-menu', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [PopoverMenu],
      html: '<popover-menu></popover-menu>'
    });
    expect(root).toEqualHtml(`
      <popover-menu>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </popover-menu>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [PopoverMenu],
      html: `<popover-menu first="Stencil" last="'Don't call me a framework' JS"></popover-menu>`
    });
    expect(root).toEqualHtml(`
      <popover-menu first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </popover-menu>
    `);
  });
});
