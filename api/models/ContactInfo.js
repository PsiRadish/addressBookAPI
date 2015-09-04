/**
* ContactInfo.js
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
            notEmpty: true
        },
        email:
        {
            type: 'email',
            defaultsTo: null
        },
        address:
        {
            type: 'string',
            defaultsTo: null
        },
        city:
        {
            type: 'string',
            defaultsTo: null
        },
        state:
        {
            type: 'string',
            defaultsTo: null,
            in:
            [   '',
                null,
                'Alabama',
                'Alaska',
                'Arizona',
                'Arkansas',
                'California',
                'Colorado',
                'Connecticut',
                'Delaware',
                'District of Columbia',
                'Washington D.C.',
                'Florida',
                'Georgia',
                'Hawaii',
                'Idaho',
                'Illinois',
                'Indiana',
                'Iowa',
                'Kansas',
                'Kentucky',
                'Louisiana',
                'Maine',
                'Maryland',
                'Massachusetts',
                'Michigan',
                'Minnesota',
                'Mississippi',
                'Missouri',
                'Montana',
                'Nebraska',
                'Nevada',
                'New Hampshire',
                'New Jersey',
                'New Mexico',
                'New York',
                'North Carolina',
                'North Dakota',
                'Ohio',
                'Oklahoma',
                'Oregon',
                'Pennsylvania',
                'Puerto Rico',
                'Rhode Island',
                'South Carolina',
                'South Dakota',
                'Tennessee',
                'Texas',
                'Utah',
                'Vermont',
                'Virginia',
                'Washington',
                'West Virginia',
                'Wisconsin',
                'Wyoming'
            ]
        },
        zip:
        {
            type: 'string',
            defaultsTo: null,
            regex: /\d{5}(-\d{4})?|^$/
        },
        phone:
        {
            type: 'string',
            defaultsTo: '',
            regex: /(1-?)?\(?\d{3}\)?( |-)?\d{3}-?\d{4}/
        },
        
        // ASSOCIATIONS
        person:
        {
            model: 'Person',
            defaultsTo: null
        }
    },
    
};
