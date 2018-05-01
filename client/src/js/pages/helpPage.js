const BasePage = require('watch-framework').BasePage;
// const logo = require('../../images/logo.png')

class HelpPage extends BasePage {
  template() {
    return `<div align="center">Super Shapes is here to engage a child into learning
     in a fun and positive game App. A series of Shapes, Colours and Patterns are to be matched to the selected
     shape in the center of the watch.</div><div align="center"></br> Your child is required to match them correctly. It will help them to
    memorise & identify structures. Every level which is completed will be awarded with 
    positive reinforcement.</div>`;
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

module.exports = HelpPage;
