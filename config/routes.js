/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = 
{
    '/': 'HelpController.help',
    
    'post /person': 'PersonController.create',
    
    // CONTACT INFO
    '/contactInfo': { response: 'notFound' },
    // create on/add to person by name
    'post /person/:personId/contact': 'ContactInfoController.create',
    'post /person/:personId/info': 'ContactInfoController.create',
    // update
    'patch /person/:personId/contact/:id': 'ContactInfoController.update',
    'patch /person/:personId/info/:id': 'ContactInfoController.update',
    // update shorter route
    'patch /contact/:id': 'ContactInfoController.update',
    'patch /info/:id': 'ContactInfoController.update',
    
    // CATEGORY
    // '/category/:name': 'CategoryController.show',   // TODO?
    'post /person/:personId/category': 'CategoryController.createOnPerson',
    'put /person/:personId/category/:categoryId': 'CategoryController.addPerson'
};
