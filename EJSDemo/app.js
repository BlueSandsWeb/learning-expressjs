var express = require("express");   // you can also initialize express like so: var app = require("express")(); it's more efficient but slightly harder to read
var app = express();

app.use(express.static("public"));  // this tells express to server the content of the public directory

app.set("view engine", "ejs");


//---------------------
// ROUTING
//---------------------

//home page
app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My Adorable Pet Bunny", author: "Bob"},
            {title: "Can you Believe This Pomsky?", author: "Jimmy"},
    ];
    
    res.render("posts", {posts: posts})
});

// 404 page THIS GOES LAST!
app.get("*", function(req, res){
    res.send("404, error.  Waves hand, this is not the page you're looking for");
})

app.listen(process.env.PORT || 3000, process.env.IP || "LOCALHOST", function() {
    console.log("Server is listening");
})