var mime = {
  'html': 'text/html',
  'svg': 'image/svg+xml',
  'jpg': 'image/jpeg',
  'png': 'image/png',
  'gif': 'image/gif',
  'css': 'text/css',
  'js': 'application/javascript'
  // ......
};

function getMimeType(url){
  var extname = path.extname(url).substring(1);
  return mime[extname];
}

module.exports = {
  getMimeType
};