function perfectNum(num) {
    let n = 1;
    let positiveDivisors = [];
    while (n < num) {
      if (num % n === 0) {
        positiveDivisors.push(n);
      }
      n++;
    }
  
    let sumOfPosDivisors = 0;
    for (let i = 0; i < positiveDivisors.length; i++) {
      sumOfPosDivisors += positiveDivisors[i];
    }
  
    if (sumOfPosDivisors == num) {
      console.log('We have a perfect number!');
    } else {
      console.log("It's not so perfect.");
    }
  }