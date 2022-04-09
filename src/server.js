var express = require('express');
var app = express();
var cors= require("cors");
var routes= require("./routes/Exam");
var db = require("./models/index");

app.use(cors());

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//  });
db.sequelize.sync()
    


app.use(routes);

var server = app.listen(5000, function () {
    console.log('Server is running..');
});