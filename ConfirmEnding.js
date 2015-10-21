//Checks if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  offset = target.length;

  var substr = str.substring((str.length) - offset); //extracts target from the str
  console.log(substr);

  if (substr == target) {
    return true;
  } else {
    return false;
  }
}
end("Bastian", "p");
