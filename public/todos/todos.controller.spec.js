'use strict';

describe('todos', function(){

    beforeEach(module('todos'));

    describe('TodosCtrl', function(){

        var ctrl, routeParams, userAuth;
        var scope = {};
        beforeEach(inject(function($controller){
            ctrl = $controller('TodosCtrl',{$scope: scope, $routeParams: routeParams, UserAuthentication: userAuth});

        }));

        it('should initialise variable `testVar` to `Another Unit Test Successful!`', function() {
          expect(ctrl.testVar).toBe('Unit Test Successful!');
        });

        it('should initialise variable `otherTestVar` to `Another Unit Test Successful!`', function() {
         expect(scope.otherTestVar).toBe('Another Unit Test Successful!');
        });



    });



});
