//Higher Order Functions
//

let isOdd = function (num) {
				return (num % 2 != 0);
}

let isEven = function(num) {
				return (num % 2 === 0);
}


let filter = function (fn, array) {
				let resultArray = [];
				for(number of array) {
								if(fn(number)) {
												resultArray.push(number);
								}
				}
				return resultArray;
}

numbers = [1,2,3,4,5,6,7,8,9];

console.log( filter(isOdd, numbers) );
console.log( filter(isEven, numbers) );
