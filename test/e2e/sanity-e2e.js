import data from '../../demo/data';

describe('sanity e2e', () => {

  beforeEach(() => device.reloadReactNative());

  it('should see a list of items', async () => {
    await expect(element(by.id('list'))).toBeVisible();
  });

  it('should see more messages after scrolling', async () => {
    //design allows six messages on screen at once
    await expect(element(by.label(data[0]))).toBeVisible();
    await expect(element(by.label(data[7]))).toBeNotVisible();
    await element(by.id('list')).scroll(200);
    await expect(element(by.label(data[0]))).toBeNotVisible();
    await expect(element(by.label(data[7]))).toBeVisible();

  });


  it('should not render too many messages at once', async () => {
    await expect(element(by.label(data[0]))).toBeVisible();
    await expect(element(by.label(data[20]))).toNotExist();
    await element(by.id('list')).swipe('up', 'fast');
    await expect(element(by.label(data[20]))).toExist();
  });


});
