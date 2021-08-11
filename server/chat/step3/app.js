const path = require('path');

const static = require('./middleware/static')(path.join(__dirname, 'public'));
const logger = require('./middleware/logger')({target: 'file'});

function app(req, res){
  static(req, res);
  logger(req, res);
}

module.exports = app;


