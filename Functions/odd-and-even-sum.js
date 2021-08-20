function oddAndEvenSum(num) {
    let numToStr = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numToStr.length; i++) {
      if (Number(numToStr[i]) % 2 === 0) {
        evenSum += Number(numToStr[i]);
      } else {
        oddSum += Number(numToStr[i]);
      }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }