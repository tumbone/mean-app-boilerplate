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
                //@TODO Fix this to use angular component
                templateUrl: '/todos/views/list-todos.template.html'
            }).
            when('/todoslist',{                
                template: '<list-todos><list-todos>'
            }).
            when('/todos/create', {
                //@TODO Fix this to use angular component
                templateUrl: '/todos/views/create-todo.template.html'
            }).
            when('/todos/:todoId', {
                //@TODO Fix this to use angular component
                templateUrl: 'todos/views/view-todo.template.html'
            }).
            when('/todos/:todoId/edit', {
                //@TODO Fix this to use angular component
                templateUrl: 'todos/views/edit-todo.template.html'
            }).
            otherwise('/');
        }
      ]);
