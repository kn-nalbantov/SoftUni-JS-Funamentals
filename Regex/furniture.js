function furniture(input) {
  let pattern = />>([A-Za-z]+)<<(\d+\.*\d+)!(\d+)/g;
  let result = [];
  let total = 0;
  for (let line of input) {
    let match = pattern.exec(line);

    if (match != null) {
      let price = 0;
      let qty = 0;
      result.push(match[1]);
      price = Number(match[2]);
      qty = Number(match[3]);
      total = price * qty;
      result.push(total);
    }
    if (pattern.test(line)) {
    }
  }

  let toPrint = 'Bought furniture:\n';
  let totalPrice = 0;

  for (let i = 0; i < result.length; i += 2) {
    toPrint += result[i];
    toPrint += '\n';
    totalPrice += Number(result[i + 1]);
  }

  toPrint += 'Total money spend: ' + totalPrice.toFixed(2);

  console.log(toPrint);
}