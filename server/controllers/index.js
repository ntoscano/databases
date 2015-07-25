var models = require('../models');
var bluebird = require('bluebird');
var request = require("request");




module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        console.log('-----------get', results);
        res.end(JSON.parse(results));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('messages.post')
      module.exports.users.post(req, res, function(results){
        console.log('messages.post.user.post callback', results); 
        //get userID from results
        var ID = results[0].userID
        models.messages.post(ID, req.body.message, function(results){ 
          console.log('post-----',results);
          // res.write(results);
          res.end();
        })
      })
    }
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      console.log('test');
      res.end();
    },
    post: function (req, res, callback) {
      console.log('post', req.body);
      models.user_info.post(req.body.username, function(results){
        var ID = results
        callback(ID);
      })
      res.end();
    }
  }
}

// request({ method: "POST",
//         uri: "http://127.0.0.1:3000/classes/messages",
//         json: {
//           username: "Valjean",
//           message: "In mercy's name, three days is all I need.",
//           roomname: "Hello"
//         }
// }, function() {
//   console.log('CALLBACKLALSFLASDFLASDJF');
//   request("http://127.0.0.1:3000/classes/messages");
// });
// var res;
// module.exports.messages.post(test, res);
// module.exports.messages.get();