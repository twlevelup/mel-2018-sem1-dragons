const GamePage = require('../../src/js/pages/gamePage');

describe('The Game Page', () => {
  let shapeswatchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    shapeswatchFace = document.getElementById('watch-face');
  });

  it('default has 7 shapes in the list of shapes array', () => {
    const page = new GamePage();
    expect(page.shapes.length).toEqual(7);
  });

  it('random chosen shape must be a item of the shapes list',()=>{
    const page = new GamePage();
    const isInShape = page.shapes.includes(page.expectedShape);
    expect(isInShape).toEqual(true);
  });

  it('selected shape must be a item of the shapes list',()=>{
    const page = new GamePage();
    page.onload = function testSelectedInDiv(){
      page.template();
      page.rightButtonEvent();
      const selectShapeInShape = page.shapes.includes(page.selectedShape);
      expect(selectShapeInShape).toEqual(true);
    }   
  });

  it('should contain main div', () => {
    const page = new GamePage();
    expect(page.template()).toContain('div id="game-page"');
  });

  it('should contain top-container div', () => {
    const page = new GamePage();
    expect(page.template()).toContain('div id="top-container"');
  });
  it('should contain random-chosen div', () => {
    const page = new GamePage();
    expect(page.template()).toContain('div id="random-chosen"');
  });
  it('should contain central-container div', () => {
    const page = new GamePage();
    expect(page.template()).toContain('div id="central-container"');
  });
  it('should contain central-area div', () => {
    const page = new GamePage();
    expect(page.template()).toContain('div id="central-area"');
  });
});
