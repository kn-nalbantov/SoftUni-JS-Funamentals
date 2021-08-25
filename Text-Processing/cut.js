function cut(input) {
  let firstHalf = input.substring(0, input.length / 2);
  let secondHalf = input.substring(input.length / 2);

  let reversed1 = '';
  for (let i = firstHalf.length - 1; i >= 0; i--) {
    reversed1 += firstHalf[i];
  }

  console.log(reversed1);

  let reversed2 = '';
  for (let i = secondHalf.length - 1; i >= 0; i--) {
    reversed2 += secondHalf[i];
  }

  console.log(reversed2);
}
