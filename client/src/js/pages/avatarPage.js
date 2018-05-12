const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/avatarPage.hbs')
const croc = '/client/src/images/croc.png';

class avatarPage extends BasePage {
  // constructor(props = {}) {
  //   super(props);
  //   this.avatar = "";
  // }
    // createAvatarFor1(avatar) {
    //   const src = document.getElementById("avatar").getAttribute("src");
    //   this.avatar = "/client/src/images/croc.png'";
    //   return this.avatar
    // }

    template() {
    const context = {
      avatar: croc,
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
