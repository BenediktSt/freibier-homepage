import { FreibierHomepagePage } from './app.po';

describe('freibier-homepage App', function() {
  let page: FreibierHomepagePage;

  beforeEach(() => {
    page = new FreibierHomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
