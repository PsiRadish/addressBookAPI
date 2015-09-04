
addressApp.controller('ContactInfoEditCtrl', ['$scope', '$routeParams', '$location', 'ContactInfo', function($scope, $routeParams, $location, ContactInfo)
{
    $scope.editedContactInfo = {};
    
    console.log('Stop using old shit, dammit');
    
    ContactInfo.get({id: $routeParams.id}).then(function(contactInfo)
    {
        $scope.editedContactInfo = contactInfo;
        
        console.log('ContactInfo prepped for edit', contactInfo);
    }).catch(function(err)
    {
        console.log('Error\n', err);
    });
    
    $scope.commitEdits = function()
    {
        $scope.editedContactInfo.$update().then(function(savedContactInfo)
        {
            console.log('ContactInfo edited', savedContactInfo);
            
            $scope.editing = false;
            
            $location.path('/person/'+savedContactInfo.person+'/info/'+savedContactInfo.id); // redirect
        }).catch(function(err)
        {
            console.log('Error\n', err);
        });
    };
}]);
