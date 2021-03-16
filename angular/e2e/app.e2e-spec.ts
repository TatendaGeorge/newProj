import { FirstBoilerPlateAppTemplatePage } from './app.po';

describe('FirstBoilerPlateApp App', function() {
  let page: FirstBoilerPlateAppTemplatePage;

  beforeEach(() => {
    page = new FirstBoilerPlateAppTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
