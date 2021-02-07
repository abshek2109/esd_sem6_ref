//create database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tcet', {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log("Connected Successfully..."))
    .catch( (error) => console.log(error) );
    
//create schema    
const employeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    salary: Number
});

//create model
//const EmployeeModel = new mongoose.model(<collection>, <schemaObject>);
const EmployeeModel = new mongoose.model("employee", employeeSchema);

module.exports = EmployeeModel