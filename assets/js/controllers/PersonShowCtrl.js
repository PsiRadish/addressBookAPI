
addressApp.controller('PersonShowCtrl', ['$scope', '$routeParams', '$location', 'Person', 'ContactInfo', function($scope, $routeParams, $location, Person, ContactInfo)
{
    console.log("canary tweet tweet");
    
    $scope.person = {};
    $scope.editing = false;
    
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
    
    // for experimental version of show
    $scope.cancelEdit = function()
    {
        $scope.editing = false;
        
        Person.get({id: $routeParams.id}).then(function(person)
        {
            $scope.person = person;
            
            console.log('Person show', person);
        }).catch(function(err)
        {
            console.log('Error\n', err);
        });
    }
    
    $scope.deletePerson = function(person)
    {
        console.log('personDelete', person);
        person.$delete();
    }
    
    $scope.commitEdits = function()
    {
        $scope.person.$save().then(function(savedPerson)
        {
            console.log('Person saved', savedPerson);
            
            $scope.editing = false;
            
            $location.path('/person/'+savedPerson.id); // redirect
        }).catch(function(err)
        {
            console.log('Error\n', err);
        });
    };
    
    $scope.newContactInfo = {};
    /*    name: '',
        email: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        phone: ''
    };*/
    // $scope.newContactInfo = new ContactInfo();
    
    $scope.clearNew = function()
    {
        $scope.newContactInfo.name = '';
        $scope.newContactInfo.email = null;
        $scope.newContactInfo.address = null;
        $scope.newContactInfo.city = null;
        $scope.newContactInfo.state = null;
        $scope.newContactInfo.zip = null;
        $scope.newContactInfo.phone = '';
        // $scope.newContactInfo = new ContactInfo();
    };
    
    $scope.createContactInfo = function()
    {
        var newContactInfo = new ContactInfo($scope.newContactInfo);
        
        newContactInfo.$save({person_id: $routeParams.id}).then(function(resultContactInfo)
        {
            console.log('New info', resultContactInfo);
            
            $location.path('/person/'+$routeParams.id); // redirect
            
        }).catch(function(err)
        {
            $log.error('Twas an error\n', err);
        });
    }
    
    $scope.deleteContactInfo = function(info)
    {
        console.log('deleteContactInfo', info);
        doomedInfo = new ContactInfo(info);
        doomedInfo.$delete();
    }
}]);
