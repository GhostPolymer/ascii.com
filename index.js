//dependencies and port 
var http = require('http');
var serveStaticFiles = require('ecstatic')({ root: __dirname + '/public' });
var port = process.env.PORT || 8000;
//creation of the server
http.createServer(function (req, res) {
    if (req.url.indexOf('/ads') === 0) {
        return require('./server/handle-ads')(req, res);
    }
//handling of the api
    if (req.url.indexOf('/api') === 0) {
        return require('./server/handle-delay')(req, res);
    }

    // default: handle the request as a static file that being public dirname
    serveStaticFiles(req, res);
}).listen(port);
//physical showing of the port connection via cmd
console.log('Listening on http://localhost:%d', port);