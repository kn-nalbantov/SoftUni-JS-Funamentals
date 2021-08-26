function barcodes(input) {
  let pattern = /@#+([A-Za-z0-9]{5,})[A-Z]@#+/;

  for (let i = 1; i < input.length; i++) {
    const barcode = input[i];

    let match = pattern.exec(barcode);

    if (match != null) {
      let concatDigits = '';
      for (let char of match[1]) {
        char = Number(char);
        if (!isNaN(char)) {
          concatDigits += char;
        }
      }
      if (concatDigits == '') concatDigits = '00';
      console.log(`Product group: ${concatDigits}`);
    } else {
      console.log('Invalid barcode');
    }
  }
}

