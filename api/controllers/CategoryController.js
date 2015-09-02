/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    // findByName: function(req, res)
    // {
    //     Category.findOneByName(req.params.name).then(function(category)
    //     {
    //         console.log(category);
            
    //         res.send(category);
    //     }).catch(function(err)
    //     {
    //         res.send(err);
    //     });
    // }
    index: function(req, res)
    {
        res.send('');
    },
    
    create: function(req, res)
    {
        console.log('req.body.name', req.body.name);
        
        Person.findOne(req.params.personId).populate('categories').then(function(person)
        {
            // var name;
            // if (typeof req.params.name != 'undefined')
            // {
            //     name = req.params.name;
            // }
            // else
            //     name = req.body.name;
            console.log(person);
                
            Category.findOrCreate({name: req.body.name}).then(function(category)
            {
                console.log(category);
                
                // res.send(person);
                person.categories.add(category);
                person.save(function(err, personer)
                {
                    if (!err)
                    {
                        console.log(personer.name, "got a new category.");
                        res.send(personer);
                    }
                    else
                    {   console.log('err?!', err);
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
