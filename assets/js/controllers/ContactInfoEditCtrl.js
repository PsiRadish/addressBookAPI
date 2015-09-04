
addressApp.controller('ContactInfoEditCtrl', ['$scope', '$routeParams', '$location', 'ContactInfo', function($scope, $routeParams, $location, ContactInfo)
{
    $scope.editedContactInfo = {};
    
    ContactInfo.get({id: $routeParams.id}).then(function(contactInfo)
    {
        $scope.editedContactInfo = contactInfo;
        
        console.log('ContactInfo prep for edit', contactInfo);
    }).catch(function(err)
    {
        console.log('Error\n', err);
    });
    
    $scope.commitEdits = function()
    {
        $scope.editedContactInfo.$save().then(function(savedContactInfo)
        {
            console.log('ContactInfo saved', savedContactInfo);
            
            $scope.editing = false;
            
            $location.path('/contactInfo/'+savedContactInfo.id); // redirect
        }).catch(function(err)
        {
            console.log('Error\n', err);
        });
    };
}]);
