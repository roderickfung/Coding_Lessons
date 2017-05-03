
// Lab 1 - Higher Order Functions
const doubleIt = (x) => {
				return 2 * x;
};

const tripleIt = (x) => {
				return 3 * x;
};

let call = (num , fn1, fn2 ) => {
				let ans = fn1(num);
				return fn2(ans);
};

console.log(call(5, doubleIt, tripleIt));

// Lab 2 - Timing Functions
//

t = 1000;

let timeFn = (time) => {				

				console.log('Ready');
				setTimeout(function() {
								console.log('Set');
								setTimeout(function() {
												console.log('Go');
								}, time);
				}, time);
};

timeFn(t);


