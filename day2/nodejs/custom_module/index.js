var mymathmodule = require("./mymodule");

console.log(mymathmodule.add(5, 6));

console.log(mymathmodule.mul(4,5));

//mymathmodule.showStar();

cobj = new mymathmodule.Circle(5);
cobj.area();