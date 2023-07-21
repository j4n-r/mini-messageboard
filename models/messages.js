const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new  Schema({
    author: { type: String, required: false, maxLength: 20, minLength: 3},
    message: {type: String, required: true, maxLength: 400, minLength: 2}
    date: {type: Date};
})


model.exports = mongoose.model("message", messageSchema)