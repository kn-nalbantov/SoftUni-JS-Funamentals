function equalSums(arr) {
    let sumsMatch = false;
    let indexAtMatch = 0;
    for (let i = 0; i < arr.length; i++) {
      let sumLeft = 0;
      let sumRight = 0;
      for (let j = 0; j < i; j++) {
        sumLeft += arr[j];
      }
      for (let j = i + 1; j < arr.length; j++) {
        sumRight += arr[j];
      }
      if (sumLeft == sumRight) {
        sumsMatch = true;
        indexAtMatch = i;
      }
    }
    if (sumsMatch) {
      console.log(indexAtMatch);
    } else {
      console.log('no');
    }
  }