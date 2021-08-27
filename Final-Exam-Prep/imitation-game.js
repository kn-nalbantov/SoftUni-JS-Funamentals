function imitationGame(input) {
  let message = input.shift();

  while (input[0] !== 'Decode') {
    let tokens = input.shift().split('|');
    let command = tokens[0];

    if (command == 'ChangeAll') {
      message = message.split(tokens[1]).join(tokens[2]);
    }

    if (command == 'Insert') {
      let index = Number(tokens[1]);
      let left = message.substring(0, index);
      let right = message.substring(index);
      message = left + tokens[2] + right;
    }

    if (command == 'Move') {
      let index = Number(tokens[1]);
      let left = message.substring(0, index);
      let right = message.substring(index);

      message = right + left;
    }
  }

  console.log(`The decrypted message is: ${message}`);
}

