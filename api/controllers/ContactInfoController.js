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
            ContactInfo.create(req.body).then(function(info)
            {
                // res.send(person);
                person.info.add(info);
                person.save(function(err, personer)
                {
                    if (!err)
                    {
                        console.log(personer.name, "got a new info.");
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
        }).catch(function(err)
        {
            res.send(err);
        });
    }
};
