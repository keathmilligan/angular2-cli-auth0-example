import { Auth0TestPage } from './app.po';

describe('auth0-test App', function() {
  let page: Auth0TestPage;

  beforeEach(() => {
    page = new Auth0TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
