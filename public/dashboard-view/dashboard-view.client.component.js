'use strict';

angular.module('meanApp').
    component('dashboardView',{
        templateUrl: '<p>Dashboard View</p>'+ '<span>{{$ctrl.test_var}}</span>',
        controller: function dashboardCtrl(){
            this.test_var = 'from the dashboard';

        }

    });
