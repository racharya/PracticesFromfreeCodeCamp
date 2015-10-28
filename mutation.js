/* Return true if the string in the first element of the array contains all of
the letters of the string in the second element of the array. */

function mutation(arr) {
  str1 = arr[0];
  str2 = arr[1];
  count = 0;
  for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < str1.length; j++) {
      if (str2[i].toLowerCase() === str1[j].toLowerCase()) {
        count++;
      }
    }
    if (count >= str2.length) { // because case ["hello", "Hello"]
      return true;
    }
  }
  return false;
}

mutation(["hello", "hey"]);
