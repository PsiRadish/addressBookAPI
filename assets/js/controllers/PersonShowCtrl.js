
addressApp.controller('PersonShowCtrl', ['$scope', '$routeParams', 'Person', function($scope, $routeParams, Person)
{
    $scope.person = {};
    
    Person.get({id: $routeParams.id}).then(function(person)
    {
        $scope.person = person;
        console.log('Person show', person);
    }).catch(function(err)
    {
        console.log('Error\n', err);
    });
}]);
