var http = require('http');
var static = require('node-static');
var file = new static.Server('../');

http.createServer(function(req, res) {

  if (req.url == '/user') {
    req.on('data', data => {
      var decodedData = JSON.parse(data.toString());
      if (decodedData.name == 'Vasya') {
        res.statusCode = 403;

        return res.end('Denied');
      }
      res.end('Complete');
    });
  }
  file.serve(req, res);
})
.listen(7163);

console.log('Server running on port 7163');