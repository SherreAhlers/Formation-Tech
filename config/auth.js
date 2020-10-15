const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
    let token = req.get('Authorization') || req.query.token || req.body.token;
    if (token) {
        //remove the Bearer if it was included in the token header
        token = token.replace('Bearer ', '');
        //Check if the token is valid and not expired
        jwt.verify(token, SECRET, function(err, decoded) {
            if (!err) req.user = decoded.user
            console.log(req.user)
            return next();
        });
    } else {
        next();
    }
};