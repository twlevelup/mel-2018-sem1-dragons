const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/gamePage.hbs')


class GamePage extends BasePage {

  constructor(props = {}) {
    super(props);
    this.colors = props.colors || ['red', 'blue', 'yellow'];
    this.shapes = props.shapes || ['triangle', 'cicle', 'rectangle'];
    this.patterns = props.patterns || ['dots', 'waves'];

  }

  selectAShape(shapes){
      const randomChosenIndex = Math.floor(Math.random()*this.shapes.length);
      return this.shapes[randomChosenIndex]
    };

  template() {
    var context = {
      colors: this.colors,
      shapes: this.shapes,
      patterns: this.patterns,
      chosenShape : this.selectAShape(this.shapes),
    };
    return compiledTemplate(context)
  };

  topButtonEvent() {
    this.navigate('/');
  }
  
};

module.exports = GamePage;
