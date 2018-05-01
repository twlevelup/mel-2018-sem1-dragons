const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/gamePage.hbs')


class GamePage extends BasePage {
  template() {
      return compiledTemplate();
  }
}

var shapesList = ["square", "cicle", "triangle"];
var randomChosen = Math.floor(Math.random()*shapesList.length);

module.exports = GamePage;