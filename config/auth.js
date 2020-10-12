const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        //remove the Bearer if it was included in the token header
        token = token.replace('Bearer', '');
        //Check if the token is valid and not expired
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                next(err);
            } else {
                //token is valid, add user to req object
                req.user = decoded.user;
                next();
            }
        });
    } else {
        next();
    }
};