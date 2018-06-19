'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');


module.exports.listUser = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false; 
    user.all().then( users => {
        if(users.length == 0) {
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'No Users data Found',
            });
            return;
        }
  
        const response = {
            statusCode: 200,
            body: JSON.stringify(users),
        };
        callback(null, response);
    }, function(err){
        console.error(err);
        callback(null, {
            statusCode: 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not find Users',
        });
        return;
    });
};

module.exports.listPost = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false; 
    post.all().then( posts => {
        if(posts.length == 0) {
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'No Posts data Found',
            });
            return;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(posts),
        };
        callback(null, response);
    }, function(err){
        console.error(err);
        callback(null, {
            statusCode: 501,
            headers: { 'Content-Typpe': 'text/plain' },
            body: 'Could not find Posts',
        });
        return;
    });
};

module.exports.listTag = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false; 
    tag.all().then( tags => {
        if(tags.length == 0) {
            callback(null, {
                statusCode: 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'No Tags data Found',
            });
            return;
        }
        const response = {
            statusCode: 200,
            body: JSON.stringify(tags),
        };
        callback(null, response);
    }, function(err){
        console.error(err);
        callback(null, {
            statusCode: 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not find Tags',
        });
        return;
    });
};
