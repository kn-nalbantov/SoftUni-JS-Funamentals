function travelTime(input) {
  let guide = {};

  //parse input
  for (let line of input) {
    let [country, city, cost] = line.split(' > ');
    cost = Number(cost);

    if (guide.hasOwnProperty(country)) {
      //itterate the array
      let needToCreateCity = false;
      for (let entry of guide[country]) {
        if (entry.city == city) {
          //rewrite lower value trip
          if (entry.cost > cost) {
            entry.cost = cost;
          }
          break;
        } else {
          needToCreateCity = true;
        }
      }
      if (needToCreateCity) {
        let obj = {};
        obj.city = city;
        obj.cost = cost;
        guide[country].push(obj);
      }
    } else {
      guide[country] = [];
      let obj = {};
      obj.city = city;
      obj.cost = cost;
      guide[country].push(obj);
    }
  }
  console.log(guide);
  //sort guide

  let sorted = Object.entries(guide);

  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  //print result
  for (let i=0; i<sorted.length; i++) {
    const element = sorted[i];
    let result = '';
    for (let e of element[1]) {
      result += e.city + ' -> ' + e.cost + ' ';
    }
    console.log(`${element[0]} -> ${result}`);
  }
}

