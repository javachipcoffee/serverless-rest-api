'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');

module.exports.deleteUser = (event, context, callback) => {
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
};

module.exports.deletePost = (event, context, callback) => {
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
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not remove post',
        });
        return;
    });
};

module.exports.deleteTag = (event, context, callback) => {
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
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not remove post',
        });
        return;
    });
};
