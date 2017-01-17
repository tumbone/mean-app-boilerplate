//@TODO CHECK: I've removed '$scope' from the array of directive dependencies below,
//check that $scope does not introduce errors.

angular.module('todos').
    controller('TodosCtrl',['$scope','$routeParams','$location','UserAuthentication','Todos',
    function($scope, $routeParams, $location, UserAuthentication, Todos){

        $scope.authentication = UserAuthentication;
        this.testVar = "Unit Test Successful!";
        $scope.otherTestVar = "Another Unit Test Successful!";

        $scope.create = function() {
            var todo = new Todos({
                title: $scope.title,
                comment: $scope.comment
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
