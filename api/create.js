'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');
var jwt = require('./models/jwt.js');

module.exports.createUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const timestamp = new Date().getTime();
    var data = JSON.parse(event.body);

    const params = {
        username: data.username,
        password: data.password,
        createdAt: timestamp,
        updatedAt: timestamp,
    };
    user.findOrCreate({
        'where' : {username:data.username}, defaults: params
    }).spread((user, created) => {
        if (user) {
            const response = {
                statusCode: 200,
                body: JSON.stringify(user),
            };
            callback(null, response);
        } else {
            const response = {
                statusCode: 200,
                body: JSON.stringify(created),
            };
            callback(null, response);
        }
    })
};

module.exports.createPost = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const timestamp = new Date().getTime();
            var data = JSON.parse(event.body);

            const params = {
                username: response.username,
                post: data.post,
                tag: data.tag,
                createdAt: timestamp,
                updatedAt: timestamp,
            };

            post.create(params).then( 
                post => {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify(post),
                    };
                    callback(null, response);
                });
        })
        .catch((err) => {
            callback(null, {
                statusCode: 400,
                headers: { 'Content-Type': 'text/plain' },
                body: err.message?err.message: 'Invalid Token',
            });
            return;
        });
};

module.exports.createTag = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            const timestamp = new Date().getTime();
            var data = JSON.parse(event.body);
        
            const params = {
                tag: data.tag,
                createdAt: timestamp,
                updatedAt: timestamp,
            };
        
            tag.create(params).then( 
                tag => {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify(tag),
                    };
                    callback(null, response);
                });
        })
        .catch((err) => {
            callback(null, {
                statusCode: 400,
                headers: { 'Content-Type': 'text/plain' },
                body: err.message?err.message: 'Invalid Token',
            });
            return;
        });
};
