var bigNumber = (arr) => {
  var max = 0;
  for(i in arr) {
    arr[i] > max ? max = arr[i] : false
  };
  return max;
}

console.log(bigNumber([40,2,13,34,42]));
