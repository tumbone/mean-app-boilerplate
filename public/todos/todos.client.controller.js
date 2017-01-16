angular.module('todos').
    controller('TodosCtrl',['$scope','$routeParams','$location','UserAuthentication','Todos',
    function($scope, $routeParams, $location, UserAuthentication, Todos){

        //$scope.authentication = UserAuthentication;
        this.authentication = "user";
        this.testVar = "Unit Test Successful!";

        this.create = function() {
            var todo = new Todos({
                title: this.title,
                comment: this.comment
            });

            todo.$save(function(response) {
                $location.path('todos/' + response._id);
            }, function(errorResponse) {
                this.error = errorResponse.data.message;
            });
        };

        this.find = function() {
            this.todos = Todos.query();
        };

        this.findOne = function() {
            this.todo = Todos.get({
                todoId: $routeParams.todoId
            });
        };

        this.update = function() {
            $scope.todo.$update(function() {
                $location.path('todos/' + this.todo._id);
            }, function(errorResponse) {
                this.error = errorResponse.data.message;
            });
        };

        this.delete = function(todo) {
            if (todo) {
                todo.$remove(function() {
                    for (var i in $scope.todos) {
                        if (this.todos[i] === todo) {
                            this.todos.splice(i, 1);
                        }
                    }
                });
            } else {
                this.todo.$remove(function() {
                    $location.path('todos');
                });
            }
        };

    }]);
