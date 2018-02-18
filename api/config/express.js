let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = () => {
  let app = express();
  
  app.use(bodyParser.json());

  app.use(expressValidator());

  consign()
    .include('controllers')
    .then('dao')
    .then('services')
    .into(app);

  return app;
}