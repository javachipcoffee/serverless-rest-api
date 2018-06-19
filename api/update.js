'use strict';

var user = require('./models/Users.js');
var post = require('./models/Posts.js');
var tag = require('./models/Tags.js');

module.exports.updateUser = (event, context, callback) => {
    context.callbackWaitsFupdateV2orEmptyEventLoop = false; 
    const timestamp = new Date().getTime();
    var data = event.body;
    if(typeof event.body !== 'object'){
        data = JSON.parse(event.body);
    }
    if (typeof data.username !== 'string' || typeof data.password !== 'string') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t update the User data',
        });
        return;
    }
    const params = {
        username: data.username,
        password: data.password,
        updatedAt: timestamp,
    };
    user.update(
        params,
        { 'where': { 'id' : event.pathParameters.id } }
    ).then( result => {
        if(result){ 
            user.findById(event.pathParameters.id).then( users => {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify(users),
                };
                callback(null, response);
            });
            return; 
        }
        callback(null, {
            statusCode: 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch User.',
        });
  
    }, function(err){
        console.error(err);
        callback(null, {
            statusCode: err.statusCode || 501,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update User. Error: '+err,
        });
    });
};