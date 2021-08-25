function revealWords(words, template) {
    words = words.split(', ');
  
    for (let line of words) {
      let length = line.length;
      let toBeReplaced = '*'.repeat(length);
      template = template.replace(toBeReplaced, line);
    }
  
    console.log(template);
  }