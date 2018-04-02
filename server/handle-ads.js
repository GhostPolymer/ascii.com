var getQueryParams = require('./get-params');

function getUrlSearchParam(url, s) {
    const allQueries = url.slice(1).split('&');
    let val = '';

    allQueries.forEach((query) => {
        if (query.indexOf(s) !== -1) {
            val = query.split('=')[1];
        }
    });

    return val;
}

module.exports = function (req, res) {
    var params = getQueryParams(req.url);

    var max = 16;
    var r = parseInt(params.r, 10) || 0;

    var n = (r % max) + 1;
  res.writeHead(302, {
            'Location': `https://unsplash.it/320/200?image=${n}`
        });

        res.end();
    };
