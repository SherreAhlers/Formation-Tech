const Technology = require('../models/technology');

module.exports = {
    index,
    show,
    create,
    deleteOne,
    update
}

async function index(req, res) {
    const technologies = await Technology.find({});
    res.status(200).json(technologies);
}

async function show(req, res) {
    const technology = await Technology.findById(req.params.id);
    res.status(200).json(technology);
  }
  
  async function create(req, res) {
    req.body.owner = req.user._id
    const technology = await Technology.create(req.body);
    res.status(201).json(technology);
  }

  async function deleteOne(req, res) {
    const deletedTechnology = await Technology.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedTechnology);
  }
  
  async function update(req, res) {
    const updatedTechnology = await Technology.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedTechnology);
  }