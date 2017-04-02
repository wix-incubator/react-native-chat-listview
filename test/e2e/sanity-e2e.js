import data from '../../demo/data';

describe('sanity e2e', () => {

  beforeEach(() => device.reloadReactNative());

  it('should see a list of items', async () => {
    await expect(element(by.id('list'))).toBeVisible();
  });

  it('should see more messages after scrolling', async () => {
    //design allows six messages on screen at once
    await expect(element(by.label(data[99]))).toBeVisible();
    await expect(element(by.label(data[92]))).toBeNotVisible();
    await element(by.id('list')).scroll(200, 'up');
    await expect(element(by.label(data[99]))).toBeNotVisible();
    await expect(element(by.label(data[92]))).toBeVisible();

  });


  it('should not render too many messages at once', async () => {
    await expect(element(by.label(data[99]))).toBeVisible();
    await expect(element(by.label(data[79]))).toNotExist();
    await element(by.id('list')).swipe('down', 'fast');
    await expect(element(by.label(data[79]))).toExist();
  });


});
