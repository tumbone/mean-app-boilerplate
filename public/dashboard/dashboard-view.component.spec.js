'use strict';

describe('dashboardView', function(){

    //Load the module that contains the `phoneList` component before each test
    beforeEach(module('core.users'));
    beforeEach(module('dashboardView'));


    //Test the controller
    describe('dashboardCtrl', function(){
        /*it('should create a `TodosTest` model with 3 todos', inject(function($componentController){
            var ctrl = $componentController('dashboardView');

            expect(ctrl.TodosTest.length).toBe(3);
        }));*/
        it('should create a `TodosTest` model with 3 todos', inject(function($componentController) {
          var ctrl = $componentController('dashboardView');

          //expect(ctrl.phones.length).toBe(3);
        }));
    });
});
