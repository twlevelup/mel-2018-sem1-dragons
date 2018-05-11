const BasePage = require('watch-framework').BasePage;
const compiledTemplate = require('../../templates/gamePage.hbs')

class GamePage extends BasePage {
  constructor(props = {}) {
    super(props);
    this.shapes = props.shapes || ['◯', '▢', '☆', '♡', '△', '♤', '♘'];
    this.currentFocus = 0;
    this.expectedShape = this.generateShape(this.shapes);
    this.selectedShape = "";
  }

  generateShape(shapes) {
    const randomChosenIndex = Math.floor(Math.random() * this.shapes.length);
    return this.shapes[randomChosenIndex]
  };

  template() {
    var context = {
      shapes: this.shapes,
      expectedShape: this.expectedShape,
      selectedShape: this.selectedShape,
    };
    return compiledTemplate(context)
  };

  topButtonEvent() {
    this.navigate('/');
  }

  bottomButtonEvent() { 
    this.navigate('/');
  }

  rightButtonEvent() {
    const lengthOfShapes = this.shapes.length;
    if (this.currentFocus === lengthOfShapes) {
      this.currentFocus = 0;
    }
    this.selectedShape = this.shapes[this.currentFocus];
    let centralTopContainer = document.getElementById("central-top-container");
    centralTopContainer.innerHTML = this.selectedShape;
    
    // ------highlight toggled shape--------
    const rightShapes = document.getElementsByClassName("shape"); 
    const styleOfCurrentShapeBorder = rightShapes[this.currentFocus].style;
    for (var i = 0; i < lengthOfShapes; i++) {
      rightShapes[i].style.border = "none";
    } 
    styleOfCurrentShapeBorder["border"] = "2px solid #50cbee";
    styleOfCurrentShapeBorder["boxShadow"] = "0 0 5px #50cbee";
    this.currentFocus++;
  };
 
  leftButtonEvent() {
     this.navigate('/');   
  }
};

module.exports = GamePage;
