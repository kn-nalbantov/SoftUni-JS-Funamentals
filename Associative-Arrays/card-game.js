function cardGame(input) {
  let collection = {};
  let toPrint = [];
  //format input
  for (let line of input) {
    const [name, cards] = line.split(': ');

    if (collection.hasOwnProperty(name)) {
      collection[name] += ', ' + cards;
    } else {
      collection[name] = cards;
    }
  }

  //calc card value
  console.log(collection)

  let cards = Object.values(collection);

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  for (let elem of cards) {
    let deck = elem.split(', ');

    deck = deck.filter(onlyUnique);

    let sum = 0;

    for (let c of deck) {
      let number;
      let color;
      if (c.length === 3) {
        number = c.slice(0, 2);
        color = c.slice(2);
      } else {
        number = c.slice(0, 1);
        color = c.slice(1);
      }
      if (number == 'J') number = 11;
      if (number == 'Q') number = 12;
      if (number == 'K') number = 13;
      if (number == 'A') number = 14;
      number = Number(number);

      let colors = [null, 'C', 'D', 'H', 'S'];

      let result = number * colors.findIndex(x => x == color);

      sum += result;

    }
    toPrint.push(sum);
  }


  //print result
  let index = 0;
  let playerNames = Object.keys(collection);

  for (let i=0; i<toPrint.length; i++) {
    console.log(`${playerNames[index]}: ${toPrint[i]}`);
    index++;
  }

}