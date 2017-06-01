import { GuideComplete2Page } from './app.po';

describe('guide-complete2 App', () => {
  let page: GuideComplete2Page;

  beforeEach(() => {
    page = new GuideComplete2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
