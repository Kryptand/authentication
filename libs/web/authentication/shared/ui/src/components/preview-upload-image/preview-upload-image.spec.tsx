import { newSpecPage } from '@stencil/core/testing';
import { PreviewUploadImage } from './preview-upload-image';

describe('preview-upload-image', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [PreviewUploadImage],
      html: '<preview-upload-image></preview-upload-image>'
    });
    expect(root).toEqualHtml(`
      <preview-upload-image>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </preview-upload-image>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [PreviewUploadImage],
      html: `<preview-upload-image first="Stencil" last="'Don't call me a framework' JS"></preview-upload-image>`
    });
    expect(root).toEqualHtml(`
      <preview-upload-image first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </preview-upload-image>
    `);
  });
});
