require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const logo = require('../../images/logo.png');
const compiledTemplate = require("../../templates/successPage.hbs");

class SuccessPage extends BasePage {
  template() {
    return `<div align="center">Done Really well!!! Are you ready for level 2?.</div>`;
    };
   
  

  rightButtonEvent() {
    this.navigate('game');
  }

  leftButtonEvent(){
    this.navigate('game');
  }

  topButtonEvent() {
    this.navigate('game');
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }
}

module.exports = SuccessPage;
