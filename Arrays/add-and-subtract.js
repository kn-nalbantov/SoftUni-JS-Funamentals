function addAndSubtract(numbers) {
    let result = [];
    let sum = 0;
    let resultSum = 0;
      for (let i=0; i<numbers.length; i++) {
    sum += numbers[i]
        if (numbers[i] % 2 === 0) {
          result.push(numbers[i]+i);
          resultSum += (numbers[i]+i);
      } else {
          result.push(numbers[i]-i);
          resultSum += (numbers[i]-i);
    }
    }
    console.log(result);
    console.log(sum);
    console.log(resultSum);
    }