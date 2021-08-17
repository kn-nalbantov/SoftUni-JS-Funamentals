function rounding(num, dec) {
    let newDec = dec;
    if (dec > 15) newDec = 15;
    console.log(parseFloat(num.toFixed(newDec)));
}