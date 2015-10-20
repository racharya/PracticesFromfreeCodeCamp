function reverseString(str) {
  strArray = str.split('');//splits str by characters
  strArray.reverse();
  str = strArray.join("");//joins by characters
  return str;
}

reverseString("hello");
