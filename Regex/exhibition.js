function exhibition(input) {
  let plants = {};

  for (let i = 1; i <= Number(input[0]); i++) {
    const [plant, rarity] = input[i].split('<->');
    plants[plant] = [];
    plants[plant].push(rarity);
  }

  console.log(plants);

  for (let i = Number(input[0]) + 1; i < input.length - 1; i++) {
    const command = input[i].split(':')[0];
    const [plant, value] = input[i].split(':')[1].split(' - ');

    if (command == 'Rate') {
      if (plants.hasOwnProperty(plant)) {
        plants[plant].push(value);
      }
    } else if (command == 'Update') {
      if (plants.hasOwnProperty(plant)) {
        plants[plant][0] = value;
      }
    } else if (command == 'Reset') {
      if (plants.hasOwnProperty(plant)) {
        plants[plant].length = 1;
      }
    } else {
      console.log('error');
    }
  }
  console.log(plants);
}

