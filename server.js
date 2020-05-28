//Imports
const express = require("express");
const app = express();

const mongoose = require("mongoose");

//config
mongoose.connect("mongodb://localhost/moviesDB", {
    useNewUrlParser: true,
});

// Settings
app.use(express.static(__dirname + "/public/dist/public"));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

//Database


//routes
require("./server/config/routes.js")(app);

//Port
app.listen(8000);