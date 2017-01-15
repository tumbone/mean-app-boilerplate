angular.
module('dashboardView').
    component('dashboardView',{
        templateUrl: '/dashboard/dashboard-view.template.html',
        controller: ['UserAuthentication', function dashboardCtrl(UserAuthentication){
            this.authentication = UserAuthentication;
            this.TodosTest = {};       
        }]

    });
