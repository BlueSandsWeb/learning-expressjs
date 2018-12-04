var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

// ***** ROUTING ***** //

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/friends", function(req, res){
   res.render("friends", {friends: friends}); 
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
   res.redirect("/friends"); 
});

// ----- 404 page ----- //
app.get("*", function(req, res){
   res.render("404");
});

// ***** server starts listening ***** //
app.listen(process.env.PORT || "3000", process.env.IP || "LOCALHOST", function(){
   console.log("Server started");
});