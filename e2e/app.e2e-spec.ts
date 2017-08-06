import { SecVoPage } from './app.po';

describe('sec-vo App', () => {
  let page: SecVoPage;

  beforeEach(() => {
    page = new SecVoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
