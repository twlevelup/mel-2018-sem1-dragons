const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/avatarPage.hbs')
const raccoon = '../../images/raccoon.png';

class avatarPage extends BasePage {
  template() {
    const context = {
      avatar: raccoon,
    };
    return compiledTemplate(context);
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
