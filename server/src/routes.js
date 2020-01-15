const { Router } = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DevController = require('./app/controllers/DevController');
const SearchController = require('./app/controllers/SearchController');

const routes = new Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
