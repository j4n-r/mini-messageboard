var express = require('express');
var router = express.Router();

const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://janruegge:SPJ5dk9GopGorMZj@cluster0.2kq9qe4.mongodb.net/?retryWrites=true&w=majority"

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages})
});

// new page
router.get('/new', function(req,res, next){
  res.render('form')
})





router.post('/new', function(req,res,next){
  const messageUser = req.body.author;
  const messageText = req.body.message;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/')


})

module.exports = router;
