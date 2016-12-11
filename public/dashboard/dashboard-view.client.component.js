angular.
module('meanApp').
    component('dashboardView',{
        template: '<p>Dashboard View</p>'+ '<span>{{$ctrl.test_var}}</span>',
        controller: function dashboardCtrl(){
            this.test_var = 'template from the dashboard component';

        }

    });
