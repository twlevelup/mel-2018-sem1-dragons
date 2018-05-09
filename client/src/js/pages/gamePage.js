const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/gamePage.hbs')


class GamePage extends BasePage {
  
  constructor(props = {}) {
    super(props); 
    this.shapes = props.shapes || ['△', '◯', '▢', '☆', '♡', '♢', '♤', '♘'];  
  }
  
  selectAShape(shapes){
      const randomChosenIndex = Math.floor(Math.random()*this.shapes.length);    
      return this.shapes[randomChosenIndex]
    };   

  template() {
    var context = {
      shapes: this.shapes,     
      chosenShape : this.selectAShape(this.shapes),
    };
    return compiledTemplate(context)
  };

  topButtonEvent() {
    this.navigate('/');
  }
  
};

module.exports = GamePage;
