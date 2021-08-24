function oddOccurances(input) {
  input = input.split(' ').map((x) => (x = x.toLowerCase()));
  let uniques = [];
  let result = [];

  input.forEach((element) => {
    if (uniques.includes(element)) {
      //do nothing
    } else {
      uniques.push(element);
    }
  });

  for (let i = 0; i < uniques.length; i++) {
    const element = uniques[i];
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (element == input[j]) count++;
    }
    if (count % 2 === 0) {
        //do nothing
    } else {
        result.push(element);
    }
  }

  console.log(result.join(' '));
}