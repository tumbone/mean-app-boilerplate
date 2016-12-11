angular.
module('dashboardView').
    component('dashboardView',{
        templateUrl: '/dashboard/dashboard-view.template.html',
        controller: function dashboardCtrl(){
            this.test_var = 'serving static template from server';
        }

    });
