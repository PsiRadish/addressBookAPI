addressApp.factory('ContactInfo', ['sailsResource', function(sailsResource)
{
    return sailsResource('ContactInfo',
    {
        save:
        {
            method: 'POST',
            url: '/api/person/:person_id/info'
        }/*,
        delete:
        {
            
        }*/
    });
}]);
