import { newE2EPage } from '@stencil/core/testing';

describe('login-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<login-form></login-form>');
    const element = await page.find('login-form');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<login-form></login-form>');
    const component = await page.find('login-form');
    const element = await page.find('login-form >>> div');
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
