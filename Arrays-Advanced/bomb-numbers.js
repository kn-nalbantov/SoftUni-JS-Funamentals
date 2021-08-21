function bombNumbers(arr, bombArr) {
    const [bomb, power] = bombArr;
  
    let index = arr.indexOf(bomb);
  
    while (index != -1) {
      let start = index - power < 0 ? 0 : index - power;
      arr.splice(start, power * 2 + 1);
      index = arr.indexOf(bomb);
    }
  
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
  }