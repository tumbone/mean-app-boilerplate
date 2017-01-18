'use strict';

describe('todos', function(){

    beforeEach(module('todos'));

    describe('TodosCtrl', function(){

        var ctrl, routeParams, userAuth;
        beforeEach(inject(function($controller){
            ctrl = $controller('TodosCtrl',{$routeParams: routeParams, UserAuthentication: userAuth});

        }));

        it('should initialise variable `testVar` to `Another Unit Test Successful!`', function() {
          expect(ctrl.testVar).toBe('Unit Test Successful!');
        });

    });

});
