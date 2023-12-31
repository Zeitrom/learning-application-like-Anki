"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionInfo = void 0;
require("./models");
const connectionInfo = {
    database: 'learning_fact_db',
    username: 'learning_db_user',
    password: process.env.DB_PASSWORD || 'kNGG0qeOxrBl',
    host: 'localhost',
    dialect: 'postgres', // Replace with your database dialect (e.g., 'mysql' or 'sqlite')
};
exports.connectionInfo = connectionInfo;
