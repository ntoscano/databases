var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('asdfa')
      models.messages.get(function(results){
        console.log('get',results);
        // res.write(results);
        // res.end();
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(function(results){ 
        console.log('post',results);
        // res.write(results);
        // res.end();
      })
    }
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
}

module.exports.messages.post();
// module.exports.messages.get();