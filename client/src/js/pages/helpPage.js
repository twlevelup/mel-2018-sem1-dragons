const BasePage = require('watch-framework').BasePage;
// const logo = require('../../images/logo.png')

class HelpPage extends BasePage {
  template() {
    return `<div id="scrollStyle"><h1 align="center">Help</h1><div align="center"> Super Shapes is here to engate a child into learning in a fun and positive game App. A series of Shapes,
    Colors and Patterns are to be matched to the selected shape in the center fo the watch, the child is required to match
    them correctly. It will helop them to memorize & identify shapes,colors,and patterns. Every level which is completed will be awarded with positive reinforcement
    for the child to continue playing and ongoing learning too. The Avatars are selected, and won at the end of every
    correctly selected full level.</div></div>`;
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
