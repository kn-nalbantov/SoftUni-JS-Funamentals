function starEnigma(input) {
  let numOfMessages = input.shift();
  let key = /[star]/gi;
  let pattern = /@([A-Za-z]+).*?:(\d+).*?!([AD])!.*?->(\d+)/g;
  let targets = {};

  for (let i = 0; i < numOfMessages; i++) {
    let message = input[i];
    let count = 0;
    let decryption = [];

    let matchedKeys = [...message.matchAll(key)];
    count = matchedKeys.length;

    for (let char of message) {
      decryption.push(char.charCodeAt());
    }

    decryption = decryption.map((x) => String.fromCharCode(x - count)).join('');

    let matches = [...decryption.matchAll(pattern)];

    for (let match of matches) {
      targets[match[1]] = match[3];
    }
  }

  let sorted = Object.entries(targets).sort((a, b) => a[0].localeCompare(b[0]));

  let attackedPlantes = [];
  let destroyedPlantes = [];

  for (let line of sorted) {
    if (line[1] == 'A') {
      attackedPlantes.push(line[0]);
    } else {
      destroyedPlantes.push(line[0]);
    }
  }

  console.log('Attacked planets: ' + attackedPlantes.length);
    for (let planet of attackedPlantes) {
      console.log('-> ' + planet);
    }
  console.log('Destroyed planets: ' + destroyedPlantes.length);
    for (let planet of destroyedPlantes) {
      console.log('-> ' + planet);
    }
}

