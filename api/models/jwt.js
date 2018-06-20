'use strict';

var jwt = require('jsonwebtoken');

module.exports.validateToken = function (event) {
    return new Promise((resolve, reject) => {
        if (event.headers.Authorization && event.headers) {
            const bearerHeader = event.headers.Authorization;
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, 'secretkey', (err, authdata) => {
                if (err) {
                    reject (err);
                } else {
                    var param = {
                        status: 200,
                        authdata
                    }
                    resolve(param);
                }
            });
        } else {
            var err = {
                'message': 'Missing Authorization'
            };
            reject(err);
        }
    });
};