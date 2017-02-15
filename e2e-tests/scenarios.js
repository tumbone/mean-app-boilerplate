'use strict';

describe('Mean-App Boilerplate', function() {
  it('should open the dashboard.html page', function() {
    browser.get('/');
    expect(browser.getLocationAbsUrl()).toBe('/');
    //expect(browser.geCurrentUrl()).toBe('/');
  });

});