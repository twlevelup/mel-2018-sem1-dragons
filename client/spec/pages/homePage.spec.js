const HomePage = require('../../src/js/pages/homePage');

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage();
      // expect(page.template()).toContain("<div>Hello, World!</div>");
    });
  });


  describe('#leftButtonEvent', () => {
    it('should take the user to the Avatar Page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('avatar');
    });
  });



  describe('#rightButtonEvent', () => {
    it('goes to Avatar page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('avatar');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('goes to Avatar page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('avatar');
    });
  });

  describe('#topButtonEvent', () => {
    it('should take the user to the help page', () => {
      const props = {
        navigate: () => { },
      };

      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('help');
    });
  });
});
