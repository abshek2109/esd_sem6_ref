const express = require("express");
var bodyParser = require('body-parser')
const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.post("/mul", (req, res) => {

    console.log(req.body);

    let x = req.body.number1;
    let y = req.body.number2;

    res_data = {
        'number1': x,
        'number2': y,
        'Multiplication' : x * y
    }

    res.send(res_data);
})

app.get("/add", (req, res) => {

    console.log(req.query);

    let req_params = req.query;
    let z = parseInt(req_params.num1) + parseInt(req_params.num2);

    res.send("Addition: " + z)

});

app.get("/get_sqr", (req, res) => {

    var num = req.query.number;
    let res_data = {'square' : num * num};

    res.send(res_data);

})

app.post("/get_cube", (req, res) => {

    console.log(req.query);
    console.log(req.body);

    var num = req.body.number;
    let res_data = {'cube' : num * num};

    res.send(res_data);
})

app.listen(8080, () => {
    console.log("Listening on port 8080..");
})

/** creat api get_sqr to read number from user and return square of that number */