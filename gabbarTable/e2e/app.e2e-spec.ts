import { GabbarTablePage } from './app.po';

describe('gabbar-table App', function() {
  let page: GabbarTablePage;

  beforeEach(() => {
    page = new GabbarTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
