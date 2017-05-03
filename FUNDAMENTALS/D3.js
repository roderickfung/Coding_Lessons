// write a function that returns zero
let zero = (number) => {
				return 0;
 };

//write a function that returns x * y
let multiply = (x, y) => {
				return x * y;
}

console.log(zero(20));
console.log(multiply(2, 3));

//count from 1 to 10 in a for loop
for(let i=1; i <= 10; i++) {
				console.log(i);
};

// for .. of <- to loop through arrays
// for .. in <- to loop through objects

let num = [1,2,3,4,5]

for (i of num) {
				console.log(i);
}

let jacob = {
				specimen: 'Sapien'
}

let summer = {
				specimen: 'Canine'
}

let things = [ jacob, summer ];

for (thing of things) {
				for ( i in thing){
								console.log(thing[i]);
				}
}

// Review Ends
//
let obj = {
				eyedee: function(arg) {
								return arg;
				}
}
