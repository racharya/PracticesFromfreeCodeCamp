function findLongestWord(str) {
  strArray = str.split(" "); //splits by space
  console.log(strArray);

  var tempStrLen = 0;

  for (var i = 0; i < strArray.length; i++) {
    tempStr = strArray[i];

    if (tempStr.length > tempStrLen) {
      tempStrLen = tempStr.length;
      console.log(tempStrLen);
    }
  }

  return tempStrLen;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
