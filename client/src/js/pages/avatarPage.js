const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/avatarPage.hbs')

class avatarPage extends BasePage {
  template() {
    return compiledTemplate();
  }


topButtonEvent() {
  this.navigate('/');
}

bottomButtonEvent() {
  this.navigate('/');
}

rightButtonEvent() {
  this.navigate('/');
}

leftButtonEvent() {
  this.navigate('/');
}
}


module.exports = avatarPage;
