function largestOfFour(arr) {
  // You can do this!
  retArray = [];
  var compVal = 0;
  for (var i = 0; i < arr.length; i++) {
    subArray = arr[i];

    console.log(subArray);
    compVal = 0;
    for (var j = 0; j < subArray.length; j++) {

      if (subArray[j] > compVal) {
        compVal = subArray[j];
        console.log(compVal);
      }
    }
    console.log(compVal);
    retArray.push(compVal);
    console.log(retArray);
  }
  return retArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
