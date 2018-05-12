require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const logo = require('../../images/logo.png');
const compiledTemplate = require("../../templates/homePage.hbs");

class HomePage extends BasePage {
  template() {
    const context = {
      logo: logo,
    };
    return compiledTemplate(context);
  }

  rightButtonEvent() {
    this.navigate('avatar');
  }

  leftButtonEvent(){
    this.navigate('avatar');
  }

  topButtonEvent() {
    this.navigate('help');
  }

  bottomButtonEvent() {
    this.navigate('avatar');
  }
}

module.exports = HomePage;
