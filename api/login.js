'use strict';

var jwt = require('jsonwebtoken');

module.exports.login = (event, context, callback) => {
    var data = JSON.parse(event.body);
    const param = {
        username: data.username,
        password: data.password,
    }
    jwt.sign(param, 'secretkey', (err, token));

 
};