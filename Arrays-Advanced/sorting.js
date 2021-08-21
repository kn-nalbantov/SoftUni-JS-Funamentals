function sorting(numbers) {
    numbers.sort((a, b) => b - a);
    let firstArr = numbers.slice(0, Math.ceil(numbers.length / 2));
    let secondArr = numbers.slice(Math.ceil(numbers.length / 2));
    secondArr.sort((a, b) => a - b);
    let resultArr = [];
    for (let i = 0; i < firstArr.length; i++) {
      resultArr.push(firstArr[i]);
      resultArr.push(secondArr[i]);
    }
    console.log(resultArr.join(' '));
  }