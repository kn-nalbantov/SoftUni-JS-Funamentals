function smallestNumber(num, num2, num3) {
    let smallest = num;
    if (num2 < smallest) smallest = num2;
    if (num3 < smallest) smallest = num3;
    console.log(smallest);
  }