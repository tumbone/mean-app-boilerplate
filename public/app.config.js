angular.module('mean').
    config('$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/',{
            template: '<dashboard-view><dashboard-view'
        }).
        otherwise('/');
    });
