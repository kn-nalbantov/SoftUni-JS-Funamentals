function searchNumber(arr, instructions) {
    let newArr = arr.slice(0, instructions[0]);
    for (let i=0; i<instructions[1]; i++) {
      newArr.shift();
    }
    let occurances = 0;
    for (let i=0; i<newArr.length; i++) {
      if (instructions[2] == newArr[i]) {
        occurances++;
      }
    }
    console.log(`Number ${instructions[2]} occurs ${occurances} times.`);
  }