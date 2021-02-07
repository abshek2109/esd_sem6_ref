var express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express...");
});

app.get("/student", (req, res) => {
    res.send("Hello Student...");
});

app.post("/student", (req, res) => {
    res.send("Hello Student POST...");
});

app.put("/student", (req, res) => {
    res.send("Hello Student put...");
});

app.delete("/student", (req, res) => {
    res.send("Hello Student delete...");
});

app.route("/teacher")
.get((req, res) => {
    res.send("Hello Teacher get...");
})
.post((req, res) => {
    res.send("Hello Teacher post...");
})
.put((req, res) => {
    res.send("Hello Teacher put...");
})
.delete((req, res) => {
    res.send("Hello Teacher delete...");
})

app.listen(8989, () => {
    console.log("Listening on port 8989");
});

//npm install express
//npm install -g express