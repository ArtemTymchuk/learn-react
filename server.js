var express = require('express');
var app = express();

const data = require("./data/fakeData");

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static('public'));

app.get('/api/ping', function (req, res) {
    res.json({ "ping": new Date().toISOString() });
});

app.get('/api/data', function (req, res) {
    res.json(data);
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});
