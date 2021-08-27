function netherRealms(input) {
  let demons = input.split(',').map((x) => x.trim());
  let demonStats = {};

  let pattern = /[A-Za-z]/g;
  let pattern2 = /[-+]*\d+\.*\d*/g;
  let pattern3 = /[*/]/g;

  for (let demon of demons) {
    let health = 0;
    let damage = 0;
    let matches = [...demon.matchAll(pattern)];

    for (let match of matches) {
      health += match[0].charCodeAt();
    }

    let nums = [...demon.matchAll(pattern2)];

    for (let match of nums) {
      damage += Number(match[0]);
    }

    let multipliers = [...demon.matchAll(pattern3)];

    for (let match of multipliers) {
      if (match[0] == '*') {
        damage = damage * 2;
      } else {
        damage = damage / 2;
      }
    }

    demonStats[demon] = [health, damage];
  }

  let sorted = Object.entries(demonStats).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let demon of sorted) {
    console.log(`${demon[0]} - ${demon[1][0]} health, ${demon[1][1].toFixed(2)} damage`);
  }
}

