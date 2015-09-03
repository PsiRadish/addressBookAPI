
addressApp.controller('HomeCtrl', ['$scope', '$modal', 'Person', function($scope, $modal, Person)
{
    $scope.persons = [];
    
    Person.query().then(function(persons)
    {
        $scope.persons = persons;
    }).catch(function(err)
    {
        
    });
    
    $scope.personEdit = function(person)
    {
        // console.log('EDIT', person);
        
    };
    
    $scope.personDelete = function(person)
    {
        person.$delete();
    };
}]);
