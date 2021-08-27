function changes(input) {
  let tokens = input.split(' ');
  let result = 0;

  for (let piece of tokens) {
    if (piece === '') break;
    let fristLetter = piece[0];
    let secondLetter = piece[piece.length - 1];
    let num = '';
    for (let i = 1; i < piece.length - 1; i++) {
      num += piece[i];
    }
    num = Number(num);

    if (fristLetter.toUpperCase() === fristLetter) {
      num = num / posInAlphabet(fristLetter);
    } else {
      num = num * posInAlphabet(fristLetter);
    }

    if (secondLetter.toUpperCase() === secondLetter) {
      num = num - posInAlphabet(secondLetter);
    } else {
      num = num + posInAlphabet(secondLetter);
    }
    result += num;
  }
  console.log(result);

  function posInAlphabet(letter) {
    if (letter.toUpperCase() === letter) {
      return Number(letter.charCodeAt()) - 64;
    } else {
      return Number(letter.charCodeAt()) - 96;
    }
  }
}

// changes('A12b s17G');
changes('P34562Z q2576f   H456z');
// changes('a1A');
