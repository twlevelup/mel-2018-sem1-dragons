const BasePage = require('watch-framework').BasePage;

class HelpPage extends BasePage {
  template() {
    return `This is a demo.`;
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
