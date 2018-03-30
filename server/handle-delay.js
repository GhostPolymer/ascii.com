const getQueryParams = require('./get-params');

module.exports = (req, res, next) => {
    var params = getQueryParams(req.url);
    
    var limit = parseInt(params.limit, 10) || 10;
    
    var skip = parseInt(params.skip, 10) || 0;
    
    var sort = params.sort || 'id';
    
    res.writeHead(200, {
      'Content-Type': 'application/x-json-stream'
    });
    
    setTimeout(function () {
      var i;
      for (i=0; i<limit; i+=1) {
        if (i+skip > max) { break }
        res.write(JSON.stringify(createRandomItem(i+skip,sort)) + '\n');
      }
      res.end();
    }, 100 + Math.floor(Math.random() * 3000));
};