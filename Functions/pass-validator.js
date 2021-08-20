function passValidator(pass) {
    let numOfWarnings = 0;
    if (pass.length < 6 || pass.length > 10) {
      numOfWarnings++;
      console.log('Password must be between 6 and 10 characters');
    }
    //ascii digits = [48, 57] letters = [65, 90] + [97, 122]
    let digitLetterWarning = false;
    let numOfDigits = 0;
    for (let i = 0; i < pass.length; i++) {
      if (
        pass.charCodeAt(i) < 48 ||
        pass.charCodeAt(i) > 122 ||
        (pass.charCodeAt(i) > 57) & (pass.charCodeAt(i) < 65) ||
        (pass.charCodeAt(i) > 90 && pass.charCodeAt(i) < 97)
      )
        digitLetterWarning = true;
      if (!isNaN(pass[i])) numOfDigits++;
    }
    if (digitLetterWarning) {
      numOfWarnings++;
      console.log('Password must consist only of letters and digits');
    }
    if (numOfDigits < 2) {
      numOfWarnings++;
      console.log('Password must have at least 2 digits');
    }
    if (numOfWarnings == 0) {
      console.log('Password is valid');
    }
  }