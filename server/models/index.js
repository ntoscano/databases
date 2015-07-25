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
    post: function (ID, message, callback) {
      db.connection.query('INSERT INTO messages (userID,text) VALUES (?, ?)', [ID, message], function(err){
        if(err) throw err;
        db.connection.query('SELECT * FROM messages', function(err, results){
          if(err) throw err;
          console.log('models.messages.post', results)
          callback(results);
        })
      })      
    } // a function which can be used to insert a message into the database
  },

  user_info: {
    // Ditto as above.
    get: function (callback) {
      // db.connection.query('SELECT ')
    },
    post: function (username, callback) {
      console.log('user_info');
      db.connection.query('SELECT * FROM user_info WHERE username = (?)', [username], function(err, results){
        console.log('user_info.query', results);
        if(err || results.length === 0){
          db.connection.query('INSERT INTO user_info (username) VALUES (?)', [username], function(err, results){
            console.log('insert');
            if(err) throw err;
            db.connection.query('SELECT * from user_info', function(err, results){ 
              console.log('SELECT after insert');
              if(err) throw err;
              callback(results);
            });
          });
        } else {
          console.log('model.insert.else', results)
          callback(results);
        }
      });
    }
  }
};


