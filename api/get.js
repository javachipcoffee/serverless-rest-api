'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');
var jwt = require('./models/jwt.js');

module.exports.getUser = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false; 
            user.findById(event.pathParameters.id).then(user => {
                if(user === null){
                    callback(null, {
                        statusCode: 501,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Could not get User.',
                    });
                    return;
                }
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(user),
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

module.exports.getPost = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false; 
            post.findById(event.pathParameters.id).then(user => {
                if(user === null){
                    callback(null, {
                        statusCode: 501,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Could not get post data.',
                    });
                    return;
                }
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(user),
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

module.exports.getTag = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false; 
            tag.findById(event.pathParameters.id).then(user => {
                if(user === null){
                    callback(null, {
                        statusCode: 501,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Could not get tag.',
                    });
                    return;
                }
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(user),
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