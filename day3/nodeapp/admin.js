const express = require("express");
const router = express.Router();

router.route("/")
.get((req, res) => {
    res.status(200);
    res.send("Admin GET method...");
})
.post((req, res) => {
    res.status(200);
    res.send("Admin post method...");
})

module.exports = router;
