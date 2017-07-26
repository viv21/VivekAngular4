import { ComponentDemoPage } from './app.po';

describe('component-demo App', () => {
  let page: ComponentDemoPage;

  beforeEach(() => {
    page = new ComponentDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
