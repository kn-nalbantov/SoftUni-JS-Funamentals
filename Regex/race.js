function race(input) {
  let pattern = /[A-Za-z]+/g;
  let nums = /\d/g;
  let result = {};
  let validNames = input[0].split(', ');

  for (let i = 1; i < input.length - 1; i++) {
    const line = input[i];
    let names = '';
    let temp = line.match(pattern);

    for (let char of temp) {
      names += char;
    }

    let distance = 0;
    let temp2 = line.match(nums);

    for (let digit of temp2) {
      distance += Number(digit);
    }

    if (result.hasOwnProperty(names)) {
        result[names] += distance;
    } else if (validNames.includes(names)) {
        result[names] = distance;
    }

  }
  
  let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

  let toPrint = `1st place: ${sorted[0][0]}\n2nd place: ${sorted[1][0]}\n3rd place: ${sorted[2][0]}`;
  console.log(toPrint);

}
