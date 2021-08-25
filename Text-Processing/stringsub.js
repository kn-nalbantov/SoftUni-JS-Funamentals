function stringSub(word, text) {
  text = text.split(' ');
  let notFound = false;

  for (let line of text) {
    let formatted = line.toLowerCase();
    if (formatted == word.toLowerCase()) {
      console.log(word);
      return;
    } else {
      notFound = true;
    }
  }

  if (notFound) {
    console.log(`${word} not found!`);
  }
}
