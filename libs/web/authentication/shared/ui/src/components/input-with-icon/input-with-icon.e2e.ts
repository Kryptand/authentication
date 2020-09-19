import { newE2EPage } from '@stencil/core/testing';

describe('input-with-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<input-with-icon></input-with-icon>');
    const element = await page.find('input-with-icon');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<input-with-icon></input-with-icon>');
    const component = await page.find('input-with-icon');
    const element = await page.find('input-with-icon >>> div');
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
