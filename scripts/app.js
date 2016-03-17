angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope, dataService){

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response) {
      // console.log(response.data);
      $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };

  })
  .service('dataService', function($http) {
    this.helloConsole = function() {
      console.log("This is the hello console service!");
    };

    this.getTodos = function(callback) {
      $http.get('mock/todos.json')
        .then(callback)
    }

    this.deleteTodo = function(todo) {
      console.log("This " + todo.name + " is deleted!");
    }

    this.saveTodo = function(todo) {
      console.log("This " + todo.name + " is deleted!");
    }
});
