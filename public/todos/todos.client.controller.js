//@TODO CHECK: I've removed '$scope' from the array of directive dependencies below,
//check that $scope does not introduce errors.

angular.module('todos').
    controller('TodosCtrl',['$routeParams','$location','UserAuthentication','Todos',
    function( $routeParams, $location, UserAuthentication, Todos){

        this.authentication = UserAuthentication;
        this.testVar = "Unit Test Successful!";
        this.otherTestVar = "Another Unit Test Successful!";

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
            this.todo.$update(function() {
                $location.path('todos/' + this.todo._id);
            }, function(errorResponse) {
                this.error = errorResponse.data.message;
            });
        };

        this.delete = function(todo) {
            if (todo) {
                todo.$remove(function() {
                    for (var i in this.todos) {
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
