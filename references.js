var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

//Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

/* Post.create({
    title: "how to cook the best burger pt. 3",
    content: "jibberish2567890"
}, function(err, post){
    User.findOne({email: "bFlay@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        }
    });
});
 */

/* 
User.create({
    email: "bFlay@gmail.com",
    name: "Bob Flay"
}); */


//Find User

//Find all posts for that user

User.findOne({email: "bFlay@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
});