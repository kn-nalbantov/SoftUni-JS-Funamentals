function palindromeInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
      let numToStr = arr[i].toString();
      if (numToStr[0] == numToStr[numToStr.length - 1]) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }