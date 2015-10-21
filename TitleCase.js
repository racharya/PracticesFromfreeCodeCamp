function titleCase(str) {
  strArray = str.split(" ");
  console.log(strArray);
  retVal = "";

  for (var i = 0; i < strArray.length; i++) {
    strToChange = strArray[i];
    console.log(strToChange);
    retVal = strToChange.charAt(0).toUpperCase();

    for (var j = 1; j <= strToChange.length; j++) {
      substring = strToChange.charAt(j).toLowerCase();
      console.log(substring);
      retVal = retVal + substring;
      console.log(retVal);
      strArray[i] = retVal;
      console.log(strArray);
    }
  }
  toReturn = strArray.join(" ");
  return toReturn;
}
titleCase("I'm a little tea pot");
