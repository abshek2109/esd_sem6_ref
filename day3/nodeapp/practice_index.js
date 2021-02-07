const express = require("express");
const app = express();
const admin = require("./admin");

app.use("/student", admin)


app.get("/", (req, res) => {
    res.send("Express is working...");
});
app.post("/", (req, res) => {
    res.send("Express is working...POST method");
});

app.route("/user")
.get((req, res) => {
    res.send("User GET...");
})
.post((req, res) => {
    res.send("User POST...");
})


app.listen(8989, () => {
    console.log("Listening on port 8989..");
})
