'use strict';

var Router = require('../src/js/router'),
  WatchFace = require('../src/js/framework/watchFace');

var app = require('../src/js/app');
app.start();

describe('The App', function() {

  describe('starting the app', function() {

    it('should setup the router', function() {
      expect(app.router instanceof Router).toBeTruthy();
    });

    it('should setup the watch face', function() {
      expect(app.watchFace instanceof WatchFace).toBeTruthy();
    });

  });

});