exports.add = function(x, y) {
    return x + y;
}

exports.mul = function(x, y) {
	showStar();
    return x * y;    
}

function showStar() {
	console.log("********\n")
}

exports.Circle = class {
	constructor(r) {
		this.radius = r;
		console.log("circle object initialized...");
	}
	
	area() {
		console.log(`Area: ${Math.PI * this.radius * this.radius}`);
	}
}

/* 1. WAF to getSquare() and use it in index.js*/

/* 2. Design a class Circle 
	constructor(r)
	radius
	area()
	circumference()
*/