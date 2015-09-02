/**
* Category.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = 
{
    attributes: 
    {
        name:
        {
            type: 'string',
            required: true,
            notEmpty: true,
            unique: true
        },
        
        // ASSOCIATIONS
        people:
        {
            collection: 'Person',
            via: 'categories'
        }
    },
    beforeValidate: function(values, next)  // manual uniqueness check for case-insensitivity and error status 400 instead of 500
    {
        console.log('beforeValidate start');
        
        if (typeof next.name == 'undefined')
        {
            console.log('beforeValidate name undefined');
            next(); // let the other validations catch it
        }
        
        Category.findOneByName(values.name).then(function(category)
        {
            if (typeof category != 'undefined')
            {
                var error =
                {
                    code: "E_UNIQUE",   // E_UNIQUE
                    status: 400,
                    summary: "1 attribute is invalid",
                    model: "Category",
                    invalidAttributes:
                    {
                        name:
                        [
                            {
                                "rule": "unique",
                                "message": "duplicate key error index: AddressBook.category.$name_1 dup key: { : \"" + values.name + "\" }"
                            }
                        ]
                    }
                };
                
                console.log(error);
                next(error);
            }
            else
            {
                next();
            }
        });
    }
};
