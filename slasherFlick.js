/* Return the remaining elements of an array after chopping off n elements
from the head (the beginning of the array, or the zeroth index). */

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (arr.length < howMany) {
    return new Array();
  } else if (howMany == 0) {
    return arr;
  } else {
    return arr.splice(howMany, arr.length - 1);
  }
}

slasher([1, 2, 3, 4, 5, 6, 7], 3);
