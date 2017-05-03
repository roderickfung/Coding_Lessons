obj = { value: 2, next: { value: 3, next: { value: 4, next: null } }};

var listToArr = function(obj) {
  var arr = [];
  arr.push(obj.value);
  obj.next != null ? arr = arr.concat(listToArr(obj.next)): false;
  return arr
}

console.log(listToArr(obj));

arg = [4, 3, 2, 1];

var arrToList = (arg) => {
  var ans = {};
  for ( i in arg ) {
   ans['value'] = arg[i];
  }
  return ans
}

console.log(arrToList(arg));
