'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');

module.exports.deleteUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    user.destroy({
        id: event
    })
};

module.exports.deletePost = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const timestamp = new Date().getTime();
    var data = JSON.parse(event.body);

    const params = {
        username: data.username,
        password: data.password,
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    post.create(params).then( 
        post => {
            const response = {
                statusCode: 200,
                body: JSON.stringify(params),
            };
            callback(null, response);
        });
};

module.exports.deleteUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const timestamp = new Date().getTime();
    var data = JSON.parse(event.body);

    const params = {
        username: data.username,
        password: data.password,
        createdAt: timestamp,
        updatedAt: timestamp,
    };

    tag.create(params).then( 
        tag => {
            const response = {
                statusCode: 200,
                body: JSON.stringify(params),
            };
            callback(null, response);
        });
};
