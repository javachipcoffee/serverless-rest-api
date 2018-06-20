'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');
var jwt = require('./models/jwt.js');

module.exports.deleteUser = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            user.destroy({
                where: {
                    id: event.pathParameters.id
                }
            }).then(function(rowsDeleted){
                if (rowsDeleted > 0) {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify({}),
                    };
       
                    callback(null, response);
                } else {
                    callback(null, {
                        statusCode: 401,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'User not found',
                    });
                }
    
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not remove user',
                });
                return;
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

module.exports.deletePost = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            post.destroy({
                where: {
                    id: event.pathParameters.id
                }
            }).then(function(rowsDeleted){
                if (rowsDeleted > 0) {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify({}),
                    };
       
                    callback(null, response);
                } else {
                    callback(null, {
                        statusCode: 401,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Post not found',
                    });
                }
    
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not remove post',
                });
                return;
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

module.exports.deleteTag = (event, context, callback) => {
    jwt.validateToken(event)
        .then((response) => {
            context.callbackWaitsForEmptyEventLoop = false;
            tag.destroy({
                where: {
                    id: event.pathParameters.id
                }
            }).then(function(rowsDeleted){
                if (rowsDeleted > 0) {
                    const response = {
                        statusCode: 200,
                        body: JSON.stringify({}),
                    };
       
                    callback(null, response);
                } else {
                    callback(null, {
                        statusCode: 401,
                        headers: { 'Content-Type': 'text/plain' },
                        body: 'Post not found',
                    });
                }
    
            }, function(err){
                console.error(err);
                callback(null, {
                    statusCode: err.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain' },
                    body: 'Could not remove post',
                });
                return;
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
