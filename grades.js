var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var f = 0;
var d = 0;
var c = 0;
var b = 0;
var a = 0;
var lowest = 100;
var highest = 0;
for (var i = 0; i < scores.length; i++) {
	if (scores[i]<60) {
		f += 1;
	}
	else if (scores[i]<=70) {
		d += 1;
	}
	else if (scores[i]<=80) {
		c += 1;
	}
	else if (scores[i]<=90) {
		b += 1;
	}
	else {
		a += 1;
	}
}

for (var i = 0; i < scores.length; i++) {
	if (lowest>scores[i]) {
		lowest = scores[i];
	}
	if (highest<scores[i]) {
		highest = scores[i];
	}
}	
console.log("There are "+a+" A's. " + "There are "+b+" B's. " +"There are "+c+" C's. "+"There are "+d+" D's. "+"There are "+f+" F's. " )
console.log("The lowest number is "+lowest);
console.log("The highest number is "+highest);