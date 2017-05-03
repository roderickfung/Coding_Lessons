// Array Methods
// Construct an instance of the array class
// creating an array object, storing it in the numbers variable
//

let numbers = new Array();
numbers.push(1);
numbers.pop();

let mario = {
				image: 'mario.png',
				clothing: ['hat', 'overall', 'gloves'],
				hitPoints: 5,
				jump: function() {
								console.log('Leap 20 meters');
				}
};

console.log(mario.image);
console.log(mario.hitPoints);
mario.jump();

var sit = () => {
				console.log('Sit');
}

var rollOver = () => {
				console.log('Roll Over');
}

let dog = {
				name: 'Summer',
				breed: 'Golden Retriever',
				trick: sit,
				tricks: [sit. rollOver]
}

dog.trick();
