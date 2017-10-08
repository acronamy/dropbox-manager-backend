import { browser, by, element } from 'protractor';

export class DropboxPhotoManagerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
