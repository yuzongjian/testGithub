var Mock = require('mockjs');
var express = require('express');
var app = express();

app.get('/api/tableData', function(req, res) {

    var data = Mock.mock({
            'code':0,
            'msg': 'nothing',
            'count': 1000,
            'data|1-1000': [{
                'date': '@date("yyyy-MM-dd")',
                'name':'@csentence(5)',
                'type': '@csentence(5)',
                'money': '@integer(10000, 1000000)',
                'number_trade': '@integer(100, 10000)'
            }]
        });
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
});

app.post('/api/tableData', function(req, res) {

    var data = Mock.mock({
            'code':0,
            'msg': 'nothing',
            'count': 1000,
            'data|1-1000': [{
                'date': '@date("yyyy-MM-dd")',
                'name':'@csentence(5)',
                'type': '@csentence(5)',
                'money': '@integer(10000, 1000000)',
                'number_trade': '@integer(100, 10000)'
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

