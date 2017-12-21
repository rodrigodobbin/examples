let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

module.exports = () => {
  let app = express();
  
  app.use(bodyParser.json());
  app.use(expressValidator());

  load('routes', { cwd: 'app'})
    .then('infra')
    .then('services')
    .into(app);

  return app;
}