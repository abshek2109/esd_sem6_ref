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
//const EmployeeModel = new mongoose.model(<collection>, employeeSchema);
const EmployeeModel = new mongoose.model("employee", employeeSchema);

/**
 * //deleteOne({where}) / deleteMany({where})
 */
const deleteDocs = async (where) => {
    let result = await EmployeeModel.deleteMany(where);
    console.log(result);
}

//deleteDocs({_id : "601bb48e549c862370f15793"});
let ids = ["601baf17f0517c219ced24ce", "601bb14b3cb96e08ec2c6a02", "601bb48e549c862370f15792", "601bb48e549c862370f15794"]
// deleteDocs({_id : {$nin : ids}})

/** Update Docs */

const updateDoc = async (_id, new_salary) => {
    let result = await EmployeeModel.updateOne({_id}, { $set : { salary : new_salary } });
    console.log(result);
}

//updateDoc("601bb14b3cb96e08ec2c6a02", 30000);

/** Read from mongo db */
let result = [];
const getDocs = async () => {
     result = await EmployeeModel.find({ age : {$lt : 50} })
        .select({_id: 0, __v: 0})
        .sort({ salary : -1 })
        .skip(2)
        .limit(1);
     console.log("Result(in getDocs):")
     console.log(result);
}

//getDocs();
//loop
// console.log("Result(out getDocs):")
// console.log(result);


/** INSERT INTO MONGODB */
const insertManyDoc = async () => {
	try {
		const t1 = new EmployeeModel({name: "Rajesh123", age: 29, city: "Delhi", salary: 27000});
		const t2 = new EmployeeModel({name: "Howard456", age: 30, city: "Mumbai", salary: 29000});
		const t3 = new EmployeeModel({name: "Leanord789", age: 33, city: "California", salary: 35000});
		const result = await EmployeeModel.insertMany([t1,t2,t3]);
		console.log(result);
	} catch(e) {
		console.log(e);
	}
};

//insertManyDoc();


var createOneDoc = async () => {
    try {
        emp1 = new EmployeeModel({ name : "Penny", age : 22, city : "Nebraska", salary: 25000});
        let result = await emp1.save();
        console.log(result);
    } catch(e) {
        console.log(e)
    }
}

//createOneDoc();

// emp1 = new EmployeeModel({ name : "Sheldon", age : 25, city : "Las Vegas", salary: 50000});
// emp1.save();