var mongoose = require("mongoose");

//Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
//Return Post model
module.exports = mongoose.model("Post", postSchema);