function commonEl(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) console.log(arr[i]);
    }
  }
}

function mergeArrays(arr, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr3.push(Number(arr[i]) + Number(arr2[i]));
    } else {
      arr3.push(arr[i] + arr2[i]);
    }
  }
  console.log(arr3.join(' - '));
}

function arrayRotation(arr, rotations) {
  for (let i = 1; i <= rotations; i++) {
    let temp = arr.shift();
    arr.push(temp);
  }
  console.log(arr.join(' '));
}

function maxNumber(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    isBiggest = true;
    for (let j = i + 1; j < arr.length; j++) {
      //test arr[i] against all values of arr[j]
      if (arr[i] <= arr[j]) {
        isBiggest = false;
        break;
      }
    }
    if (isBiggest) result += `${arr[i]} `;
  }
  console.log(result);
}

function equalSums(arr) {
  let sumsMatch = false;
  let indexAtMatch = 0;
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let j = 0; j < i; j++) {
      sumLeft += arr[j];
    }
    for (let j = i + 1; j < arr.length; j++) {
      sumRight += arr[j];
    }
    if (sumLeft == sumRight) {
      sumsMatch = true;
      indexAtMatch = i;
    }
  }
  sumsMatch ? console.log(indexAtMatch) : console.log('no');
}
// console.log('[2, 1, 1, 2, 3, 3, 2, 2, 2, 1]');
// [2, 3, 5, 5, 7, 8, 8]
function maxSequence(arr) {
  let longest = [];
  longest.push(arr[0]);
  let currentLongest = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (currentLongest[0] == arr[i]) {
      currentLongest.push(arr[i]);
    } else {
      currentLongest = [];
      currentLongest.push(arr[i]);
    }

    if (currentLongest.length > longest.length) longest = currentLongest;
  }

  console.log(longest.join(' '));
}

function magicSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    let matched = false;
    let indexAtMatch;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        matched = true;
        indexAtMatch = j;
      }
    }
    if (matched) console.log(arr[i] + ' ' + arr[indexAtMatch]);
  }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('----')
magicSum([14, 20, 60, 13, 7, 19, 8],
  27)

  console.log('----')

magicSum([1, 3, 3, 3, 5, 6],
  6)