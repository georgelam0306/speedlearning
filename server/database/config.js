var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'speedlearning',
    charset: 'utf8',
    filename: path.join(__dirname, '/database.sqlite')
  }
});

/************************************************************/
// Add additional schema definitions below
/************************************************************/
db.knex.schema.hasTable('users').then(function(exists) {
  if(!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 16);
      user.string('password', 16);
      user.string('salt', 16);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;