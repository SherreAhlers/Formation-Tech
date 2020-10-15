const Comment = require('../models/comment')

module.exports = {
    create
}

async function create(req, res, next) {
    // console.log(req)
    req.body.owner = req.user
    console.log('hitting the create route for comments', req.body)
    res.send('hello')
};
