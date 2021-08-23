function storeProvision(currentStock, orders) {
    let stock = {};
  
    for (let i = 0; i < currentStock.length; i++) {
      //creates obj keys
      if (i % 2 === 0) {
        stock[currentStock[i]] = 0;
      }
    }
  
    for (let i = 0; i < orders.length; i++) {
      //adds obj keys
      if (i % 2 === 0) {
        stock[orders[i]] = 0;
      }
    }
  
    for (let i = 0; i < currentStock.length; i++) {
      //adds values
      if (i % 2 === 0) {
        stock[currentStock[i]] += Number(currentStock[i + 1]);
      }
    }
  
    for (let i = 0; i < orders.length; i++) {
      //adds values
      if (i % 2 === 0) {
        stock[orders[i]] += Number(orders[i + 1]);
      }
    }
  
    for (let key of Object.keys(stock)) {
      console.log(`${key} -> ${stock[key]}`);
    }
  }