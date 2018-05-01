const HelpPage = require('../../src/js/pages/helpPage');

describe('The Help Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new HelpPage();
      expect(page.template()).toContain('Super Shapes is here to engage a child');
    });
  });
});
