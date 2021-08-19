function maxNumber(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      isBiggest = true;
      for (let j = i + 1; j < arr.length; j++) {
        //test arr[i] against all values of arr[j]
        if (arr[i] <= arr[j]) {
          isBiggest = false;
          break;
        }
      }
      if (isBiggest) result += `${arr[i]} `;
    }
    console.log(result);
  }