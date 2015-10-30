function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  retArr = arr.filter(function(val){
    console.log(val);
    retVal = Boolean(val);//gives true if the values are not falsy
    console.log(retVal);
    return retVal;
  });

  return retArr;//returns an array of non-falsy values
}

bouncer([7, "ate", "", false, 9]);
