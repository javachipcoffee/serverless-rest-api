'use strict';

var jwt = require('jsonwebtoken');
var user = require('./models/Users.js');

module.exports.login = (event, context, callback) => {
    context.callbackWaitsFupdateV2orEmptyEventLoop = false; 
    var data = JSON.parse(event.body);
    user.findOne({
        'where': { 
            'username' : data.username,
            'password' : data.password
        } 
    }).then( result => {
        if(result){ 
            jwt.sign({user: result}, 'secretkey', (err, token) => {
                callback(null, {
                    statusCode: 200,
                    body: {'Autorization_Token': token },
                });
            });
        } else {
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(result),
            });
        }
        return;
    }   
    );
};