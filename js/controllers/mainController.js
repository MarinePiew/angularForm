// MAIN CONTROLLER
function mainController($scope) {
  var persons = [];

  $scope.add = function() {
  persons.push(new Array($scope.nom,$scope.prenom,$scope.mail));
  console.log(persons);
  $scope.nom = null;
  $scope.prenom = null;
  $scope.mail = null;
}
$scope.persons = persons;
}