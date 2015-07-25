var db = require('../db');
var bluebird = require('bluebird');

var queries = bluebird.promisify(db.connection.query)


module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err, results){ 
        if(err)throw err;
        callback(results);
      })

    }, // a function which produces all the messages
    post: function (callback) {
      db.connection.query('INSERT INTO user_info (username) VALUES (?)', ['kate'], function(err, results){
        if(err) throw err;
        db.connection.query('INSERT INTO messages (text) VALUES (?)', ['hello'], function(err, results){
          if(err) throw err;
          callback(results);
        })
        callback(results);
      })
      
    } // a function which can be used to insert a message into the database
  },

  user_info: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      db.connection.query('INSERT INTO user_info (username) VALUES (?)', [username], function(err, results){
        if(err) throw err;
        callback(results);
      })
    }
  }
};


