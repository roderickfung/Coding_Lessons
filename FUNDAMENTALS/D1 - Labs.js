// Demo Larger Number
let x = parseInt(prompt('enter your first number'));
let y = parseInt(prompt('enter your second number'));

if (x > y) {
  console.log(`first number, ${x} is bigger than the second number ${y}`);
} else if (y > x) {
  console.log(`second number, ${y} is bigger than the first number ${x}`);
} else {
  console.log(`they are the same: ${x} : ${y}`);
}


//Lab Password Checker
var password = prompt('please create a password (8-12 char)');

if(password.length > 12) {
  console.log('password is too long');
} else if (password.length < 8) {
  console.log('password is too short');
} else {
  console.log('password entered');
}

//Lab Rectangle Area
var h = prompt('enter height of the square');
var w = prompt('enter width of the square');
console.log(`The area of the square is ${parseInt(h)*parseInt(w)}`);

//Lab FizzBuzz
var n1 = prompt('enter the first integer');
var n2 = prompt('enter the second integer');

for (let i=0; i<100; i++) {
  if(i % parseInt(n1) === 0 && i % parseInt(n2) === 0 ) {
    console.log('FizzBuzz')
  } else if ( i % parseInt(n1) === 0 ) {
    console.log('Fizz');
  } else if ( i % parseInt(n2) === 0 ) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//Lab Grade Calculator
var grade = Math.floor(Math.random() * 100);

if (grade > 86) {
  console.log('A: ' + grade);
} else if (grade > 73) {
  console.log('B: ' +  grade);
} else if (grade > 66) {
  console.log('C: ' + grade);
} else if (grade > 55) {
  console.log('D: ' + grade);
} else {
  console.log("You're a failure: " + grade);
}

//Lab First Sunday