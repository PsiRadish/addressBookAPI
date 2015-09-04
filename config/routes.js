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
    '/': 'PagesController.index',
    
    // PERSON
    'get /api/person': 'PersonController.index',
    'get /api/person/:id': 'PersonController.show',
    'post /api/person': 'PersonController.create',
    
    // CONTACT INFO
    // '/api/contactInfo': { response: 'notFound' },
    // create on/add to person by name
    'post /api/person/:personId/contact': 'ContactInfoController.create',
    'post /api/person/:personId/info': 'ContactInfoController.create',
    // update
    'patch /api/person/:personId/contact/:id': 'ContactInfoController.update',
    'patch /api/person/:personId/info/:id': 'ContactInfoController.update',
    // update shorter route
    'patch /api/contact/:id': 'ContactInfoController.update',
    'patch /api/info/:id': 'ContactInfoController.update',
    'put /api/contact/:id': 'ContactInfoController.update',
    'put /api/info/:id': 'ContactInfoController.update',
    
    // CATEGORY
    // 'get /api/category/:id': 'CategoryController.show',  // TODO
    // '/api/category/:name': 'CategoryController.showByName',   // TODO?
    'post /api/person/:personId/category': 'CategoryController.createOnPerson',
    'put /api/person/:personId/category/:categoryId': 'CategoryController.addPerson',
    
    "get *":
    {
        controller: "PagesController",
        action: "index",
        skipAssets: true,
        skipRegex: /^\/api\/.*$/
    }
};
