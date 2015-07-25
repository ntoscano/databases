var models = require('../models');
var bluebird = require('bluebird');

var test = {
  username: 'nick',
  text: 'hello there'
}


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        results += ''
        res.write(results);
        res.end();
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages.post')
      module.exports.users.post(req, res, function(results){
        console.log('messages.post.user.post callback', results); 
        var ID = results[0].userID;
        models.messages.post(ID, function(results){ 
          console.log('post-----',results);
          // res.write(results);
          // res.end();
        })
      })
    }
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('test');
    },
    post: function (req, res, callback) {
      console.log('user.post');
      models.user_info.post(test.username, function(results){
        var ID = results
        callback(ID);
      })
    }
  }
}
// var res;
// module.exports.messages.post(test, res);
// module.exports.messages.get();