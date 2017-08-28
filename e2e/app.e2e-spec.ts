import { NgReduxTodoPage } from './app.po';

describe('ng-redux-todo App', () => {
  let page: NgReduxTodoPage;

  beforeEach(() => {
    page = new NgReduxTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
