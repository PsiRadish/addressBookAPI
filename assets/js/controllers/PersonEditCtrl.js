
addressApp.controller('PersonEditCtrl', ['$scope', '$routeParams', '$location', 'Person', function($scope, $routeParams, $location, Person)
{
    $scope.editedPerson = {};
    
    Person.get({id: $routeParams.id}).then(function(person)
    {
        $scope.editedPerson = person;
        
        console.log('Person prep for edit', person);
    }).catch(function(err)
    {
        console.log('Error\n', err);
    });
    
    $scope.commitEdits = function()
    {
        $scope.editedPerson.$save().then(function(savedPerson)
        {
            console.log('Person saved', savedPerson);
            
            $scope.editing = false;
            
            $location.path('/person/'+savedPerson.id); // redirect
        }).catch(function(err)
        {
            console.log('Error\n', err);
        });
    };
}]);
