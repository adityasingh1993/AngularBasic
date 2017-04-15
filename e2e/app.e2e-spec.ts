import { TutsappPage } from './app.po';

describe('tutsapp App', () => {
  let page: TutsappPage;

  beforeEach(() => {
    page = new TutsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
