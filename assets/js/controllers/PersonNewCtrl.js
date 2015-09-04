
addressApp.controller('PersonNewCtrl', ['$scope', '$log', '$location', 'Person', function($scope, $log, $location, Person)
{
    $scope.newPerson =
    {
        firstName: '',
        lastName: '',
        notes: ""
    }
    
    $scope.createPerson = function()
    {
        var newPerson = new Person($scope.newPerson);
        
        newPerson.$save().then(function(resultPerson)
        {
            console.log('New person', resultPerson);
            
            $location.path('/person/'+resultPerson.id); // redirect
            
        }).catch(function(err)
        {
            $log.error('Twas an error\n', err);
        });
    }
}]);
