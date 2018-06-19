'use strict';

const Sequelize = require('sequelize');
const db = require('../lib/db.js').connect();

module.exports = db.define('post', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true
    },
    text: Sequelize.TEXT,
    createdAt: Sequelize.DATE,
    updateAt: Sequelize.DATE,
});