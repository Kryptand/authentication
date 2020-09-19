import { newE2EPage } from '@stencil/core/testing';

describe('preview-upload-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<preview-upload-image></preview-upload-image>');
    const element = await page.find('preview-upload-image');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<preview-upload-image></preview-upload-image>');
    const component = await page.find('preview-upload-image');
    const element = await page.find('preview-upload-image >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
