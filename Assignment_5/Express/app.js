"use strict"
let express = require("express")
let ejs = require("ejs")
let bodyParser = require("body-parser")
let request = require("request");
let session = require("express-session")

let router = express.Router();
let app = express();
app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set("view engine", "ejs")
app.engine("ejs", require("ejs").__express)
let sess;

// routes
router.get("/", (req,res) => {
    sess = req.session;
    res.render("index", {
        pagename: "index",
        sess: sess,
    })
})

router.get("/about", (req,res) => {
    sess = req.session;
    res.render("about", {
        pagename: "about",
        sess: sess,
    })
})

router.get("/projects", (req,res) => {
    sess = req.session;
    res.render("projects", {
        pagename: "projects",
        sess: sess,
    })
})

router.get("/profile", (req,res) => {
    sess = req.session;
    if (typeof(sess) == "undefined" || sess.loggedin != true) {
        let errors = ["Not authenticated user"];
        res.render("index", {
            pagename: "index",
            errs: errors,
        })
    } else {
        res.render("profile", {
            pagename: "profile",
            sess: sess,
        })
    }
})

router.get("/logout", (req, res) => {
    sess = req.session;
    sess.destroy((err) => {
        res.redirect("/")
    })
})

router.post("/login", (request, response) => {
    console.log(request.body);
    let errors = [];
    // validate email not blank
    if(request.body.email.trim() == ""){
        errors.push("Email cannot be blank");
    }
    // validate password not blank
    if(request.body.password.trim() == ""){
        errors.push("Password cannot be blank");
    }
    // validate email incorrect format
    if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(request.body.email)){
        errors.push("Invalid Email format");
    }
    // validate password incorrect format
    if(!/^(?=.*[\d])(?=.*[a-z])[\w!@#$%^&*]{6,}$/.test(request.body.password)){    
        errors.push("Invalid password format");
    }

    // If true
    if (request.body.email == "mike@aol.com" && request.body.password == "abc123") {
        sess= request.session;
        sess.loggedin = true;
        response.render("profile", {
            pagename: "profile",
            sess:sess,
        });
    } else {
        errors.push("Invalid User");
        response.render("index", {
            pagename: "index",
            errs: errors,
        })
    }
})

// declare static file locations
app.use(express.static("views"))
app.use(express.static("public)"))
app.use("/", router);
// start router
let server = app.listen("8080", () => {
    console.log("Server running on port 8080")
})



