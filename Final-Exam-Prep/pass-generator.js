function passGenerator([str1, str2, str3]) {
  let result = str1 + str2;

  //itt result and find vowels
  let index = 0;
  for (let i = 0; i < result.length; i++) {
    let vowels = ['a', 'e', 'o', 'u', 'i']; //sometimes 'y' ??
    if (vowels.includes(result[i])) {
      //replace w str3
      result =
        result.slice(0, i) + str3[index].toUpperCase() + result.slice(i + 1);
      index++;
    }
    if (str3[index] == undefined) {
      index = 0;
    }
  }

  //reverse result
  let reversedResult = '';

  for (let i = result.length - 1; i >= 0; i--) {
    reversedResult += result[i];
  }

  //print result
  console.log(`Your generated password is ${reversedResult}`);
}

