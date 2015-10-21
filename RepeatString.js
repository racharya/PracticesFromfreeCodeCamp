// Repeats a given string (first argument) n times (second argument). Returns an empty string if n is a negative number
function repeat(str, num) {
  // repeat after me
  var retStr = "";
  if (num < 0) {
    return retStr;
  } else {
    for (var i = 1; i <= num; i++) {
      retStr = retStr + str;
    }
    return retStr;
  }
}
repeat("abc", 10);
