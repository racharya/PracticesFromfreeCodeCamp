function palindrome(str) {
  // Good luck!
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  str = str.replace(/\s+/g, '');
  str = str.toLowerCase();

  strArray1 = str.split('');
  console.log(strArray1);

  strArray2 = strArray1.slice().reverse();
  console.log(strArray2);


  for (var i = 0; i < strArray1.length; i++) {
    if (strArray1[i] != strArray2[i]) {
      return false;
    }
  }


  return true;


};


palindrome("race car");
