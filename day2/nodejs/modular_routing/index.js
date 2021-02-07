var express = require("express");
const app = express();
var home = require("./home");
var student = require("./student");
// var teacher = require("./teacher");

app.use("/", home);
app.use("/student", student)
// app.use("/teacher", teacher)

app.use((req, res) => {
    res.status(404);
    res.send("Page not found...");
})

app.listen(8080, () =>  {
    console.log("listening to 8080 port");
});
