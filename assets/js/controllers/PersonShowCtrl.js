
addressApp.controller('PersonShowCtrl', ['$scope', '$routeParams', 'Person', function($scope, $routeParams, Person)
{
    $scope.person = {};
    
    Person.get({id: $routeParams.id}).then(function(person)
    {
        $scope.person = person;
        $scope.person.categoryNames = $scope.person.categories.map(function(cat)
        {
            return cat.name;
        });
        
        console.log('Person show', person);
    }).catch(function(err)
    {
        console.log('Error\n', err);
    });
    
    $scope.editPerson = function(person)
    {
        // console.log('EDIT', person);
        
    };
    
    $scope.deletePerson = function(person)
    {
        console.log('personDelete', person);
        person.$delete();
    };
}]);
