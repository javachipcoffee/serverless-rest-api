'use strict';

var Sequelize = require('sequelize');
const db = require('../lib/db.js').connect();

module.exports = db.define('tag', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true
    },
    tag: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});