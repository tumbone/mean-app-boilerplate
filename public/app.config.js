    angular.
      module('meanApp').
      config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider.
            when('/', {
              template: '<dashboard-view><dashboard-view'
            }).
            when('/todos',{
                templateUrl: '/todos/list-todos.template.html'
            }).
            otherwise('/');
        }
      ]);
