/* Write a function that splits an array (first argument) into groups the
length of size (second argument) and returns them as a multidimensional array.*/
function chunk(arr, size) {
  // Break it up.
  numArray = arr.length / size;
  retArray = [];
  for (var i = 0; i < numArray; i++) {
    leftArray = new Array();
    for (var j = 0; j < size; j++) {
      var item = arr.shift();

      if (item == null) {
        break;
      } else {
        leftArray.push(item);
      }
    }
    retArray.push(leftArray);
  }
  return retArray;
}

chunk(["0", "1", "2", "3", "4", "5"], 4);
