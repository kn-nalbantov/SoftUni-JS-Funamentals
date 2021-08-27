function mirrorWords([input]) {
  let pattern = /(#|@)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;

  let matches = [...input.matchAll(pattern)];
  let mirrors = [];

  for (let match of matches) {
    if (match[2].split('').reverse().join('') === match[3]) {
      let mirror = match[2] + ' <=> ' + match[3];
      mirrors.push(mirror);
    }
  }

  if (matches.length > 0) {
    console.log(`${matches.length} word pairs found!`);
  } else {
    console.log('No word pairs found!');
  }

  if (mirrors.length > 0) {
    console.log('The mirror words are:');
    console.log(mirrors.join(', '));
  } else {
    console.log('No mirror words!');
  }
}

mirrorWords([
  '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r',
]);
console.log('-----------');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
