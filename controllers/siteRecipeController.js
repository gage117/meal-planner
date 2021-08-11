const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.SiteRecipe.find(req.query)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.SiteRecipe.findById(req.params.id)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.SiteRecipe.create(req.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.SiteRecipe.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.SiteRecipe.findById(req.params.id)
      .then(dbRecipe => dbRecipe.remove())
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  }
};