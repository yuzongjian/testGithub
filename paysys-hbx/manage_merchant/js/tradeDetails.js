var Mock = require('mockjs');
var express = require('express');
var app = express();

app.get('/api/tableDetails', function(req, res) {

    var data = Mock.mock({
            'code':0,
            'msg': 'nothing',
            'count': 1000,
            'data|1-1000': [{
                'create_time': '@date("yyyy-MM-dd")',
                'update_time': '@date("yyyy-MM-dd")',
                'name':'@csentence(5)',
                'contact_phone': '@string("number", 11)',
                'contact_name': '@csentence(5)',
                'status_data': '@integer(1,2)'
            }]
        });
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
});

app.post('/api/tableDetails', function(req, res) {

    var data = Mock.mock({
            'code':0,
            'msg': 'nothing',
            'count': 1000,
            'data|1-1000': [{
                'create_time': '@date("yyyy-MM-dd")',
                'update_time': '@date("yyyy-MM-dd")',
                'name':'@csentence(5)',
                'contact_phone': '@string("number", 11)',
                'contact_name': '@csentence(5)',
                'status_data': '@integer(1,2)'
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

