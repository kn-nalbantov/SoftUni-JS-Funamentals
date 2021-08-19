function arrayRotation(arr, rotations) {
    for (let i = 1; i <= rotations; i++) {
      let temp = arr.shift();
      arr.push(temp);
    }
    console.log(arr.join(' '));
  }