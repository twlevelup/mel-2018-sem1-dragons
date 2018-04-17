  const avatarPage = require('../../src/js/pages/avatarPage');

  describe('The avatar Page', () => {
    let watchFace;
    beforeEach(() => {
      document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
      watchFace = document.getElementById('watch-face');
    });
    });

    describe('#template', () => {
    it('should contain the correct text', () => {
      const page = new avatarPage();
      expect(page.template()).toContain('Avatar Page');
    });
  });
