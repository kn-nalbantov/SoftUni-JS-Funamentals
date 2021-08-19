function magicSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
      let matched = false;
      let indexAtMatch;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === undefined) break;
        if (arr[i] + arr[j] == sum) {
          matched = true;
          indexAtMatch = j;
        }
      }
      if (matched) console.log(arr[i] + ' ' + arr[indexAtMatch]);
    }
  }