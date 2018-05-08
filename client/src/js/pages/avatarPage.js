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
  this.navigate('game');
}

rightButtonEvent() {
  this.navigate('game');
}

leftButtonEvent() {
  this.navigate('game');
}
}


module.exports = avatarPage;
