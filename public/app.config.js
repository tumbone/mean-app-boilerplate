    angular.
      module('meanApp').
      config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider.
            when('/', {
              template: '<dashboard-view><dashboard-view>'
            }).
            when('/todos',{
                template: '<list-todos><list-todos>'
            }).
            when('/todos/create', {
                template: '<create-todo><create-todo>'
            }).
            when('/todos/:todoId', {
                template: '<view-todo><view-todo>'
            }).
            when('/todos/:todoId/edit', {
                template: '<edit-todo><edit-todo>'
            }).
            otherwise('/');
        }
      ]);
