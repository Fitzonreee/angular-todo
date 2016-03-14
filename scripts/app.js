angular.module("todoListApp", [])
  .controller('mainCtrl', function($scope){

    $scope.todos = [
      {"name": "finish this Angular app"},
      {"name": "Run 2 times a week"},
      {"name": "Don't Drink except happy hour"},
      {"name": "finish Full Mean course"},
      {"name": "Swim one day at CCC"}
    ]

  });
