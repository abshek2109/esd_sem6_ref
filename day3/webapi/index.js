const express = require("express");
const app = express();
const fileUpload = require("express-fileupload")
// var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())

app.post("/uploadpic", (req, res) => {

    console.log(req.query);
    // console.log(req.params);
    console.log(req.body);
    console.log(req.files);

    var profile_pic_object = req.files.profile_pic;
    var upload_path = __dirname + "/images/" + profile_pic_object.name;
    console.log(upload_path);
    profile_pic_object.mv(upload_path);

    res.send("File uploaded successfully...");
})

app.post("/div", (req, res) => {

    console.log(req.body);

    var query_params = req.body;
    var x = parseInt(query_params.number1);
    var y = parseInt(query_params.number2);
    var z = x / y;

    var res_data = {
        'number1' : x,
        'number2' : y,
        'division' : z
    }

    res.status(200);
    res.send(res_data);
});

app.post("/mul", (req, res) => {

    console.log(req.body);

    var query_params = req.body;
    var x = parseInt(query_params.number1);
    var y = parseInt(query_params.number2);
    var z = x * y;

    var res_data = {
        'number1' : x,
        'number2' : y,
        'multiplication' : z
    }

    res.status(200);
    res.send(res_data);
});

app.get("/diff", (req, res) => {

    var query_params = req.query;
    var x = query_params.number1;
    var y = query_params.number2;
    var z = x - y;

    var res_data = {
        'number1' : x,
        'number2' : y,
        'difference' : Math.abs(z)
    }

    res.status(200);
    res.send(res_data);
})

app.get("/add", (req, res) => {

    console.log(req.query);
    var x = parseInt(req.query.number1);
    var y = parseInt(req.query.number2);
    var z = x + y;

    var res_data = {
        'number1' : x,
        'number2' : y,
        'Addition' : z
    }
    res.status(200)
    res.send(res_data);
})

app.listen(8989, () => {
    console.log("Listening at port 8989...");
});

/**
 write a ws to accept 2 number using get method and return difference in json format
 {
     'number1': 5,
     'number2': 8,
     'difference': 3
 }
 */