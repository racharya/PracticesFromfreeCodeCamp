/* Truncates a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
If the length of the string is less than or equal to 3 characters, then the length of the three dots is not added to the string length.
*/
function truncate(str, num) {
  // Clear out that junk in your trunk

  if (str.length > num) {

    var end = num - 3;
    if (end < 0) {
      subStr = str.slice(0, num);
      subStr = subStr + "...";
      console.log(subStr);
      return subStr;
    } else {
      subStr = str.slice(0, end);
      subStr = subStr + "...";
      console.log(subStr);
      return subStr;
    }
  } else if ((str.length <= 3) || (str.length <= num)) {
    return str;
  }
}
truncate("A-", 1);
