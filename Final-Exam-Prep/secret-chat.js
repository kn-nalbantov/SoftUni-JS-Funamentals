function secretChat(input) {
  let concealed = input.shift();

  let index = 0;
  while (input[index] != 'Reveal') {
    let [command, value, value2] = input[index].split(':|:');

    if (command == 'ChangeAll') {
      let pattern = new RegExp(value, 'g');

      concealed = concealed.replace(pattern, value2);
      console.log(concealed);
    }

    if (command == 'Reverse') {
      if (concealed.includes(value)) {
        let startIndex = concealed.indexOf(value);
        let endIndex = startIndex + value.length;
        let substring = concealed.substring(startIndex, startIndex + endIndex);
        let reversed = substring.split('').reverse().join('');
        concealed =
          concealed.substring(0, startIndex) +
          concealed.substring(endIndex) +
          reversed;
        console.log(concealed);
      }
    }

    if (command == 'InsertSpace') {
      concealed =
        concealed.substring(0, value) + ' ' + concealed.substring(value);
      console.log(concealed);
    }

    index++;
  }

  console.log(`You have a new text message: ${concealed}`);
}

