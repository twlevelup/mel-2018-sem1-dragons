const GamePage = require('../../src/js/pages/gamePage');

describe('The Game Page', () => {
    let watchFace;
    beforeEach(() => {
      document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
      watchFace = document.getElementById('watch-face');
    });
  
    describe('#template', () => {
      it('should contain main div', () => {
        const page = new GamePage();
        expect(page.template()).toContain('div id="main"');
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
});