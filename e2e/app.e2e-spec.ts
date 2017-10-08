import { DropboxPhotoManagerPage } from './app.po';

describe('dropbox-photo-manager App', () => {
  let page: DropboxPhotoManagerPage;

  beforeEach(() => {
    page = new DropboxPhotoManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
