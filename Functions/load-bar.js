function loadingBar(perc) {
    const numOfPerc = perc / 10;
    const numOfDots = (100 - perc) / 10;
    let result = `${perc}% [`;
    for (let i = 0; i < numOfPerc; i++) {
      result += '%';
    }
    for (let i = 0; i < numOfDots; i++) {
      result += '.';
    }
    result += ']';
    if (perc == 100) {
      console.log('100% Complete!');
      console.log('[%%%%%%%%%%]');
    } else {
      console.log(result);
      console.log('Still loading...');
    }
  }
  