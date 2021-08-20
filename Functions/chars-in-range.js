function charsInRange(char, char2) {
    let result = '';
    let startOfRange = char.charCodeAt(0);
    let endOfRange = char2.charCodeAt(0);
  
    if (startOfRange > endOfRange) {
      let temp = startOfRange;
      startOfRange = endOfRange;
      endOfRange = temp;
    }
  
    for (let i = startOfRange + 1; i < endOfRange; i++) {
      result += `${String.fromCharCode(i)} `;
    }
    console.log(result);
  }