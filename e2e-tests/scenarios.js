'use strict';

describe('Mean-App Boilerplate', function() {
  it('should open the dashboard.html page', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toBe('/');
    //expect(browser.geCurrentUrl()).toBe('/');
  });


  describe('View: Login', function(){

    browser.get('login');
    it('should display the login page', function(){
      expect(browser.getLocationAbsUrl()).toBe('/');
      //var login = element(by.model());
    });
  });
});