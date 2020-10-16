const Comment = require('../models/comment')

module.exports = {
    create,
    show
}

async function create(req, res) {
    req.body.owner = req.user._id
    req.body.technology = req.params.id
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
  }


async function show(req, res) {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  }