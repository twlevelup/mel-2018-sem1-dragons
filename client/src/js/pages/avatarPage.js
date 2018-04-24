const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/avatarPage.hbs')

class avatarPage extends BasePage {
  template() {
    return compiledTemplate();
  }
}

module.exports = avatarPage;
