const mongoose = require("mongoose");
const conn_str = "mongodb://localhost:27017/tcet";

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Connected Successfully..."))
    .catch( (error) => console.log(error));
    
//schema defining for collection
const studentSchema = new mongoose.Schema({
	name: String,
	age: Number
})

//create collection
//const collectionObject = new mongoose.model("<collectionname>", <schema>);
const Student = new mongoose.model("Teacher", studentSchema);
console.log(Student);

const getData = async () => {
    const data = await Student.find().select({name: 1, age: 1});
    console.log(data);
}
    
getData();
