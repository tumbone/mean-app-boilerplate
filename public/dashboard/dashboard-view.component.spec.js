'use strict';

describe('dashboardView', function(){

    //Load the module that contains the `dashboardView` component before each test
    beforeEach(module('dashboardView'));

    //Test the controller
    describe('dashboardCtrl', function(){

        var ctrl;
        beforeEach(inject(function($componentController){
            ctrl = $componentController('dashboardView');
        }));

        it('should initialise a `TodosTest` var to `todos test var!', function(){
            expect(ctrl.TodosTest).toBe('todos test var!');
        });
    });


});
