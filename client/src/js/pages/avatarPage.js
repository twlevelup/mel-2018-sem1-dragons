const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/avatarPage.hbs')
//const croc = 

class avatarPage extends BasePage {
  constructor(props = {}) {
    super(props);
    this.croc = "/Resources/croc.png";;
  }
    // createAvatarFor1(avatar) {
    //   const src = document.getElementById("avatar").getAttribute("src");
    //   this.avatar = "/client/src/images/croc.png'";
    //   return this.avatar
    // }

    template() {
    const context = {
      croc: this.croc,
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
