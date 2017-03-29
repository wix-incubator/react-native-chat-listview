// import data from '../../demo/data';

describe('sanity e2e', () => {

  beforeEach(() => device.reloadReactNative());

  it('should see a list of items', async () => {
    await expect(element(by.id('list'))).toBeVisible();
  });

  // it('should see more messages after scrolling', async () => {
  //   await expect(element(by.id('0'))).toBeVisible();
  //   await expect(element(by.id('19'))).toBeNotVisible();
  //   await element(by.id('list')).swipe('up', 'fast');
  //   await expect(element(by.id('0'))).toBeNotVisible();
  //   await expect(element(by.id('19'))).toBeVisible();
  //
  // });
  //
  //
  // it('should not render too many messages at once', async () => {
  //   await expect(element(by.id('0'))).toBeVisible();
  //   await expect(element(by.id('99'))).toNotExist();
  //   await element(by.id('list')).swipe('up', 'fast');
  //   await expect(element(by.id('99'))).toExist();
  // });


});
