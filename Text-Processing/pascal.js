function pascalCaseSplitter(input) {
  let uppercases = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].toUpperCase() === input[i]) {
      uppercases.push(i);
    }
  }

  let splitWords = [];

  for (let i = 0; i < uppercases.length; i++) {
    splitWords.push(input.substring(uppercases[i], uppercases[i + 1]));
  }

  console.log(splitWords.join(', '));
}
