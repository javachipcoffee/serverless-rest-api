'use strict';

var Sequelize = require('sequelize');
const db = require('../lib/db.js').connect();

module.exports = db.define('user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true
    },
    username: Sequelize.TEXT,
    password: Sequelize.TEXT,
    accessToken: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});