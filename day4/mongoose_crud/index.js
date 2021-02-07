const express = require("express");
const app = express();
var cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
const EmployeeModel = require("./employee")

app.post("employee/deletemany", (req,res) => {
	res.send("delete_many");
})

app.route("/employee/:id")
.get(async (req, res) => {
	//console.log(req.params);
	//res.send("result");
    result = await EmployeeModel.find({_id:req.params.id}).select({__v: 0});
    res.send(result[0]);
})

app.route("/employee")
.get(async (req, res) => {
    result = await EmployeeModel.find().select({__v: 0});
    res.send(result);
})

.post(async (req, res) => {
    emp1 = new EmployeeModel(req.body);
    let result = await emp1.save();
    res.send(result);
})

.put(async (req, res) => {
	//console.log(req.body);
	//res.send("post data");
   
   req_params = {
        salary : req.body.salary, 
        name: req.body.name,
		age: req.body.age,
		city: req.body.city
    }
    let result = await EmployeeModel.updateOne({_id: req.body.id}, { $set : req_params });
    res.send(result);
	
})


.delete(async (req, res) => {
    console.log(req.body)
    console.log(req.query)
    //let ids = req.body.ids;
    //let result = await EmployeeModel.deleteMany({ _id : {$in : ids} });
	let result = await EmployeeModel.deleteOne({ _id : req.query.id });
    res.send(result);
})

app.listen(8080, () => {
	console.log("Node listening on port 8080...");
});

