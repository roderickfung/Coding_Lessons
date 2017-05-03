// Capitalize 2nd Letters - Jennifer Cheng

// let aString = prompt("Please enter a message");
let aString = 'This is a string'
let newString = '';

for(i=0; i<aString.length; i++){
  if(i % 2 === 0){
    newString = newString + aString[i].toLowerCase();
  } else{
    newString = newString + aString[i].toUpperCase();
  }
}

// Best Answer

let str = 'This is a string';
let ans = '';
for (i in str) {
  i % 2 === 0 ? ans = ans + str[i].toLowerCase() : ans = ans + str[i].toUpperCase()
}
// console.log(ans);

// Letter Printing - Jennifer Cheng

for(let i = 0; i < 26; i++){
  let aString = '';
  for(j=0; j < i + 1; j++){
    aString = aString + String.fromCharCode(i+97);
  }
  // console.log(aString);
}

// Letter Printing - Jessie Pepper

for (j = 1; j <=27; j++) {
				let i = 95 + j;
				//console.log(Array(j).join(String.fromCharCode(i)));
}

// Letter Printing BEST ANSWER

for (i=1; i<27; i++) {
				console.log(String.fromCharCode(i+96).repeat(i));
}

// Get Day Best Answer
for(i=2014; i<2050; i++) {
  if(new Date(i, 0, 1).getDay() == 0) {
   // console.log(i);
  }
}
