/**
 * ContactInfoController
 *
 * @description :: Server-side logic for managing Contactinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    create: function(req, res)
    {
        Person.findOne(req.params.personId).populate('info').then(function(person)
        {
            if (typeof person == 'undefined')
            {
                res.notFound("Person with id " + req.params.personId + " not found");
                console.log("Person with id", req.params.personId, "not found");
            }
            else
            {
                ContactInfo.create(req.body).then(function(info)
                {
                    // res.send(person);
                    person.info.add(info);
                    person.save(function(err, personer)
                    {
                        if (!err)
                        {
                            console.log(personer.firstName, personer.lastName, "got a new info.");
                            res.send(info);
                        }
                        else
                        {
                            res.send(err);
                        }
                    });
                }).catch(function(err)
                {
                    res.send(err);
                });
            }
        }).catch(function(err)
        {
            res.send(err);
        });
    }
};
