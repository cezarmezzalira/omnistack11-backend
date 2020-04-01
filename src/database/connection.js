const knex = require('knex');
const configuration = require('../../knexfile');

const db_connection = knex(configuration.development);

module.exports = db_connection;
