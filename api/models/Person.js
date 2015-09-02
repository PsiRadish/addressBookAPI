/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = 
{
    attributes: 
    {
        firstName:
        {
            type: 'string',
            required: true,
            notEmpty: true
        },
        lastName:
        {
            type: 'string',
            defaultsTo: null
        },
        notes:
        {
            type: 'text',
            defaultsTo: null
        },
        
        // ASSOCIATIONS
        info:
        {
            collection:'ContactInfo',
            via: 'person'
        },
        categories:
        {
            collection: 'Category',
            via: 'people'
        }
    }
};
