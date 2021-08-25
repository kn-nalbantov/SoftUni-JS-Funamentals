function hardWord([letter, list]) {

    for (let i = 0; i < list.length; i++) {
      let index = letter.indexOf('_');
      let length = 0;
      let temp = index;
  
      while (letter[index] == '_') {
        length++;
        index++;
      }
      let toReplace = letter.slice(temp, index);
  
      for (let word of list) {
        if (word.length == length) {
          letter = letter.replace(toReplace, word);
        }
      }
    }
    console.log(letter);
  }