const { user } = require('pg/lib/defaults');

const knex = require('knex')(require('../../knexfile').development);

exports.getAllUsers = async () => {
    return knex('users').select('*');
};

exports.createUser = (user) => {
    return knex('users').insert(user).returning('*');
};