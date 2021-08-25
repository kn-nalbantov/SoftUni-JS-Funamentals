function modernTimes(input) {
  let words = input.split(' ');
  for (let line of words) {
    if (line[0] == '#' && line.length != 1) {
      line = line.substring(1);
      let isInvalid = false;
      for (let i = 0; i < line.length; i++) {
        if (
          line[i].charCodeAt() < 65 ||
          (line[i] > 90 && line[i] < 97) ||
          line[i] > 122
        ) {
          isInvalid = true;
          break;
        }
      }
      if (!isInvalid) {
        console.log(line);
      }
    }
  }

}