var arg1 = [1, 2, 3];
var arg2 = [1, 2, 3, 3, 4, 5];

var merge = function(arr, arr1) {
  var c = arr.concat(arr1).sort();
  var ans = [];
  for (i in c) { c[i] === c[i-1] ? false : ans.push(c[i])}
  return ans;
}
console.log(merge(arg1, arg2));
