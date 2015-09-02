/**
 * HelpController
 *
 * @description :: Server-side logic for managing Helpcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = 
{
    help: function(req, res)
    {
        res.send({ helpURL: "http://github.com/PsiRadish/addressBookAPI" }); // supposing there were actually any information there
    }
};
