import { VisaUIPage } from './app.po';

describe('visa-ui App', function() {
  let page: VisaUIPage;

  beforeEach(() => {
    page = new VisaUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
