require('../../styles/pages/home.scss');

const BasePage = require('watch-framework').BasePage;
const croc = '/client/src/images/croc-success.jpeg';
const compiledTemplate = require("../../templates/successPage.hbs");

class SuccessPage extends BasePage {
  template() {
    const context = {
      avatar: croc,
    };
    return compiledTemplate(context);
  }
   
  

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
