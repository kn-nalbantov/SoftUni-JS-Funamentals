function pianist(input) {
  let numOfPieces = Number(input[0]);
  let catalog = {};

  for (let i = 1; i <= numOfPieces; i++) {
    const [piece, composer, key] = input[i].split('|');

    if (catalog.hasOwnProperty(piece)) {
      catalog[piece].push(composer);
      catalog[piece].push(key);
    } else {
      catalog[piece] = [];
      catalog[piece].push(composer);
      catalog[piece].push(key);
    }
  }

  let index = numOfPieces + 1;

  while (input[index] != 'Stop') {
    const [command, piece, composer, key] = input[index].split('|');

    if (command == 'Add') {
      if (catalog.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        catalog[piece] = [];
        catalog[piece].push(composer);
        catalog[piece].push(key);
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    }

    if (command == 'Remove') {
      if (catalog.hasOwnProperty(piece)) {
        delete catalog[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    if (command == 'ChangeKey') {
      if (catalog.hasOwnProperty(piece)) {
        catalog[piece][1] = composer; //composer corresponds to key here...
        console.log(`Changed the key of ${piece} to ${composer}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }

    index++;
  }

  let sorted = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));

  for (let line of sorted) {
    console.log(`${line[0]} -> Composer: ${line[1][0]}, Key: ${line[1][1]}`);
  }
}

