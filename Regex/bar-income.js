function barIncome(input) {
  let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(\d+(?:\.\d+)?)\$/;
  let totalIncome = 0;

  for (let line of input) {
    let match = pattern.exec(line);
    if (match !== null) {
      let qty = Number(match[3]);
      let price = Number(match[4]);
      totalIncome += qty * price;
      console.log(`${match[1]}: ${match[2]} - ${(qty * price).toFixed(2)}`);
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
