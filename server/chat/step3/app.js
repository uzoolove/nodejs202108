const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');

const static = require('./middleware/static')(path.join(__dirname, 'public'));
const logger = require('./middleware/logger')({target: 'file'});

function app(req, res){
  static(req, res);
  logger(req, res);
}

module.exports = app;


