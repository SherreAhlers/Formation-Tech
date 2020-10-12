const Technology = require('../models/technology');

module.exports = {
    index,
    show,
    create
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
    const technology = await Technology.create(req.body);
    res.status(201).json(technology);
  }