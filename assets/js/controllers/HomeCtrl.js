
addressApp.controller('HomeCtrl', ['$scope', '$modal', 'Person', function($scope, $modal, Person)
{
    $scope.people = [];
    
    Person.query().then(function(people)
    {
        $scope.people = people;
        $scope.people.forEach(function(person)
        {
            person.categoryNames = person.categories.map(function(cat)
            {
                return cat.name;
            });
        });
    }).catch(function(err)
    {
        
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
