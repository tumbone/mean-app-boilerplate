'use strict';

describe('todos', function(){

    beforeEach(module('todos'));

    describe('TodosCtrl', function(){
        var ctrl, scope, routeParams, userAuth;
        beforeEach(inject(function($controller){
            ctrl = $controller('TodosCtrl',{$scope: scope, $routeParams: routeParams, UserAuthentication: userAuth});

        }));

        it('should initialise variable `testVar` to `Unit Test Successful!`', function() {
          expect(ctrl.testVar).toBe('Unit Test Successful!');
        });

    });



});
