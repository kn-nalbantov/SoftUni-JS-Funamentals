function worldTracker(input) {
  const words = input.shift().split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    input.forEach((el) => {
      if (element == el) count++;
    });
    words[i] = element + '+' + count;
    count = 0;
  }

  words.sort((a, b) => b.split('+')[1] - a.split('+')[1]);

  words.forEach((element) => {
    console.log(`${element.split('+')[0]} - ${element.split('+')[1]}`);
  });
}