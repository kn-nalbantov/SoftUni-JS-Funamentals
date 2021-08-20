function nXnMatrix(num) {
    let row = '';
    for (let i = 0; i < num; i++) {
      row += `${num} `;
    }
    console.log(`${row}\n`.repeat(num));
  }