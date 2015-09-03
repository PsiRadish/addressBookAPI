/**
 * PersonController
 *
 * @description :: Server-side logic for managing People
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    index: function(req, res)
    {
        Person.find().populateAll().then(function(people)
        {
            res.send(people);
        }).catch(function(err)
        {
            res.send(err);
        });
    },
    show: function(req, res)
    {
        Person.findOne(req.params.id).populateAll().then(function(person)
        {
            if (typeof person == 'undefined')
                res.notFound("No Person record found with the specified `id`: " + req.params.personId);
            
            res.send(person);
        }).catch(function(err)
        {
            res.send(err);
        });
    }
};
