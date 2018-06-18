'use strict';

var Sequelize = require('sequelize');
const db = require('../lib/db.js').connect();

module.exports = db.define('posts', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true,
        unique: true
    },
    text: Sequelize.TEXT,
    checked: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });