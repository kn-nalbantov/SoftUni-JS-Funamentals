function mirrorWords([input]) {
  let pattern = /(@|#)([A-Za-z]{3,})\1/g;

  let matches = [...input.matchAll(pattern)];
  for (let match of matches) {
    console.log(match[2]);
  }
}
