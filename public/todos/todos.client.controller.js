angular.module('todos').
    controller('TodosCtrl',['$scope','$routeParams','$location','UserAuthentication','Todos',
    function($scope, $routeParams, $location, UserAuthentication, Todos){

        //$scope.authentication = UserAuthentication;
        $scope.authentication = "user";
        $scope.testVar = "Hello Test!";

        $scope.create = function() {
            var todo = new Todos({
                title: this.title,
                comment: this.comment
            });

            todo.$save(function(response) {
                $location.path('todos/' + response._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.find = function() {
            $scope.todos = Todos.query();
        };

        $scope.findOne = function() {
            $scope.todo = Todos.get({
                todoId: $routeParams.todoId
            });
        };

        $scope.update = function() {
            $scope.todo.$update(function() {
                $location.path('todos/' + $scope.todo._id);
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.delete = function(todo) {
            if (todo) {
                todo.$remove(function() {
                    for (var i in $scope.todos) {
                        if ($scope.todos[i] === todo) {
                            $scope.todos.splice(i, 1);
                        }
                    }
                });
            } else {
                $scope.todo.$remove(function() {
                    $location.path('todos');
                });
            }
        };

    }]);
