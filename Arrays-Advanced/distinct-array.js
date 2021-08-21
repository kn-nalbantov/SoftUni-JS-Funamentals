function distinctArray(arr) {
    for (let i = 1; i < arr.length; i++) {
  
      for (let j = 0; j < i; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(i, 1);
          i--;
        }
      }
    }
    console.log(arr.join(' '));
  }