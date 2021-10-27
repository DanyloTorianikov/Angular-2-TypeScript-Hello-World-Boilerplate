import { Angular2appPage } from './app.po';

describe('angular2app App', () => {
  let page: Angular2appPage;

  beforeEach(() => {
    page = new Angular2appPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
