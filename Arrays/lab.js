function daysOfTheWeek(num) {
  let days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  if (
    num !== 1 &&
    num !== 2 &&
    num !== 3 &&
    num !== 4 &&
    num !== 5 &&
    num !== 6 &&
    num !== 7
  ) {
    console.log('Invalid day!');
  } else {
    console.log(days[num - 1]);
  }
}

function reversedArray(num, arr) {
  let output = '';
  for (let i = num - 1; i >= 0; i--) {
    output += `${arr[i]} `;
  }
  console.log(output);
}

function reversedArray2(arr) {
  let output = '';
  for (let i = arr.length - 1; i >= 0; i--) {
    output += `${arr[i]} `;
  }
  console.log(output);
}

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 0) sum += Number(arr[i]);
  }
  console.log(sum);
}

function evenOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  let result = evenSum - oddSum;
  console.log(result);
}

function equalArrays(arr, arr2) {
  let sum = 0;
  let areNotIdentical = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areNotIdentical = true;
      break;
    }
    if (!areNotIdentical) console.log(`Arrays are identical. Sum: ${sum}`);
    sum += Number(arr[i]);
  }
  if (!areNotIdentical) console.log(`Arrays are identical. Sum: ${sum}`);
}

// function equalArrays(arr1, arr2) {
//     let sum = 0;
//     for (let i=0; i<arr1.length; i++) {
//         if (arr1[i] == arr2[i]) {
//             sum += Number(arr1[i]);
//         } else {
//             console.log(`Arrays are not identical. Found difference at ${i} index`);
//             return;
//         }
//     }
//     console.log(`Arrays are identical. Sum: ${sum}`);
// }

equalArrays(['10', '20', '30'], ['1', '2', '3']);
console.log('ackhcually prints more than judge wants');

function condensedNum(arr) {
  while (arr.length > 1) {
    let condensedArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      condensedArr[i] = arr[i] + arr[i + 1];
    }
    arr = condensedArr;
  }
  console.log(arr[0]);
}