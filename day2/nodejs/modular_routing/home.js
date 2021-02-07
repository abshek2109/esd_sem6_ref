const express = require("express");
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send("Welcome to home get");
})
.post((req, res) => {
    res.send("Welcome to home post");
})
.put((req, res) => {
    res.send("Welcome to home put");
})
.delete((req, res) => {
    res.send("Welcome to home delete");
})

module.exports = router;