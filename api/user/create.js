'use strict';

var user = require('./models/Users.js');

module.exports.create = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const timestamp = new Date().getTime();
    var data = JSON.parse(event.body);

    const params = {
        username: data.username,
        password: data.password,
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    user.create(params).then( 
        user => {
            const response = {
                statusCode: 200,
                body: JSON.stringify(params),
            };
            callback(null, response);
        });
};
