var mostRecurring = (str) => {
	var counter = {};
	str = str.toLowerCase().replace(/\s/g, '').split('').forEach(
		function(i) {
			counter[i] = counter[i] + 1 || 1;
		}
	)
	max = {letter: '', count: 0};
	for(k in counter) {
		if(max.count < counter[k]) {
			max.letter = k;
			max.count = counter[k];
		}
	}
	return max;
}

console.log(mostRecurring('Hello My Name is Roderick'));
