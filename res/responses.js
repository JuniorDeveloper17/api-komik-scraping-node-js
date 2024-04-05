'user strict';

exports.succes = function (values, res) {

    var data = {
        'status': 200,
        'author': "juniorDev",
        'data': values
    }
    res.json(data);
    res.end();
}