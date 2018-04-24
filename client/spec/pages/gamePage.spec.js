const GamePage = require('../../src/js/pages/gamePage');

describe('The Game Page', () => {
    let watchFace;
    beforeEach(() => {
      document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
      watchFace = document.getElementById('watch-face');
    });
  
    describe('#template', () => {
      it('should contain the correct text', () => {
        const page = new GamePage();
        expect(page.template()).toContain('This is game page.');
      });
    });
});