var printMulti = ( arr ) => {
  for(i in arr) {
    Array.isArray(arr[i]) == true ? printMulti(arr[i]) : console.log(arr[i]);
  }
}

printMulti(['a', 'b', ['c', 'd', 'e']]);
