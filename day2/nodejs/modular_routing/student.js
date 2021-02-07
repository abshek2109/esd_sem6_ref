const express = require("express");
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send("Welcome to student get");
})
.post((req, res) => {
    res.send("Welcome to student post");
})
.put((req, res) => {
    res.send("Welcome to student put");
})
.delete((req, res) => {
    res.send("Welcome to student delete");
})

module.exports = router;