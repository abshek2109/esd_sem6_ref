const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
app.use(fileUpload());

app.post("/upload", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.files);
    console.log(`Project Dir: ${__dirname}`);

    var file_to_upload = req.files.profilepic;
    file_to_upload.mv(__dirname + '/uploads/' + file_to_upload.name);

    res.send("File Uploaded successfully...");
})

app.listen(8989, () => {
    console.log("Listening Port: 8989...");
})