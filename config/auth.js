const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

// Export a middleware function
module.exports = function(req, res, next) {
    // Check for the token being sent in three different ways
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        token = token.replace('Bearer ', '');
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) {
                return next(err);
            } else {
                req.user = decoded.user;
                return next();
            }
        });
    } else {
        next();
    }
};