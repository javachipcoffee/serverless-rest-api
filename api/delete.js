'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');

module.exports.deleteUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var data = JSON.parse(event.body);
    user.destroy({
        where: {
            id: data.id
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
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not remove user',
        });
        return;
    });
};

module.exports.deletePost = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    var data = JSON.parse(event.body);
    user.destroy({
        where: {
            id: data.id
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
            statusCode: error.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not remove post',
        });
        return;
    });
};

module.exports.deleteTag = (event, context, callback) => {

};
