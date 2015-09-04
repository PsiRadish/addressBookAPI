addressApp.factory('ContactInfo', ['sailsResource', function(sailsResource)
{
    return sailsResource('ContactInfo',
    {
        save:
        {
            method: 'POST',
            url: '/api/person/:personId/info'
        },
        update:
        {
            method: 'PUT',
            url: '/api/info/:id'
        }
    });
}]);
