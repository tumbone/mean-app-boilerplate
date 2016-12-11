// angular.module('meanApp').
//     config('$locationProvider', '$routeProvider',
//     function config($locationProvider, $routeProvider){
//         $locationProvider.hashPrefix('!');
//
//         $routeProvider.
//         when('/',{
//             template: '<dashboard-view><dashboard-view'
//         }).
//         otherwise('/');
//     });

    angular.
      module('meanApp').
      config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
          $locationProvider.hashPrefix('!');

          $routeProvider.
            when('/', {
              template: '<dashboard-view><dashboard-view'
            }).
            otherwise('/phones');
        }
      ]);
