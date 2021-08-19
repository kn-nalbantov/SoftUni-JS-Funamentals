function commonEl(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr[i] === arr2[j]) console.log(arr[i]);
      }
    }
  }