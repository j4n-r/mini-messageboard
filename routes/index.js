var express = require('express');
var router = express.Router();
const Messages = require('../models/messages')

const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://janruegge:SPJ5dk9GopGorMZj@cluster0.2kq9qe4.mongodb.net/?retryWrites=true&w=majority"



/* GET home page. */
router.get('/', async (req, res, next) => {
  let results =   await Messages.find({})
  //res.send(results).status(200);
  res.render('index', { title: "Mini Messageboard", messages: results})
});

// new page
router.get('/new', function(req,res, next){
  res.render('form')
})





router.post('/new', function(req,res,next){
  const messageUser = req.body.author;
  const messageText = req.body.message;

  const newMessage = new Messages ({
    author: messageUser,
    message: messageText,
    date: new Date()
  })
  newMessage.save()
  res.redirect('/')

})

module.exports = router;
