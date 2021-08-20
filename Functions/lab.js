function repeatString(str, num) {
  console.log(str.repeat(num));
}

function grade(grade) {
  let description = ['Fail', 'Poor', 'Good', 'Very good', 'Excellent'];
  let result = description[Math.round(grade) - 2];
  if (grade < 3) {
    console.log('Fail (2)');
  } else {
    console.log(result + ' (' + grade.toFixed(2) + ')');
  }
}

function mathPow(num, pow) {
  console.log(Math.pow(num, pow));
}

function orders(product, quantity) {
  let list = ['water', 1, 'coffee', 1.5, 'coke', 1.4, 'snacks', 2];
  for (let i = 0; i < list.length; i++) {
    if (product == list[i]) {
      console.log((quantity * list[i + 1]).toFixed(2));
    }
  }
}

function calc(num, num2, textOperator) {
  if (textOperator == 'multiply') operator = '*';
  if (textOperator == 'divide') operator = '/';
  if (textOperator == 'add') operator = '+';
  if (textOperator == 'subtract') operator = '-';

  console.log(eval(`${num} ${operator} ${num2}`));
}

function signCheck(numOne, numTwo, numThree) {
  let isPositive = (num) => num >= 0;

  function negativesCounter(num1, num2, num3) {
    let numberOfNegatives = 0;
    if (!isPositive(num1)) numberOfNegatives++;
    if (!isPositive(num2)) numberOfNegatives++;
    if (!isPositive(num3)) numberOfNegatives++;
    return numberOfNegatives;
  }

  //if 1 neg > negative
  //if 2 neg > pos
  //if 3 neg > neg
  if (
    negativesCounter(numOne, numTwo, numThree) == 1 ||
    negativesCounter(numOne, numTwo, numThree) == 3
  ) {
    console.log('Negative');
  } else {
    console.log('Positive');
  }
}

signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
