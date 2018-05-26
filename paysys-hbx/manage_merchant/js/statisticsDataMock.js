var Mock = require('mockjs');
var express = require('express');
var app = express();
//post
app.post('/api/tableDetails', function(req, res) {

    var data = Mock.mock({
            'cakyData|5': [{
                'value': '@integer(10, 100)',
                'name': '@cname()'
            }],
            'broken_lineData|5': [{
                'name': '@cname()',
                'type': 'line',
                'stack': '总量',
                'data': [
                   '@integer(60, 100)',
                   '@integer(80, 120)',
                   '@integer(60, 140)',
                   '@integer(60, 160)',
                   '@integer(60, 180)',
                   '@integer(60, 200)',
                   '@integer(60, 100)'
                ]
            }]
        });
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});