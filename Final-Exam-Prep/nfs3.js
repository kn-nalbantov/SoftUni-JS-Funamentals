function nfs(input) {
  let n = input.shift();

  let cars = {};

  for (let i = 0; i < n; i++) {
    const [car, mileage, fuel] = input[i].split('|');

    cars[car] = [];
    cars[car].push(Number(mileage), Number(fuel));
  }

  let index = n;

  while (input[index] != 'Stop') {
    const [command, car, value, value2] = input[index].split(' : ');

    if (command == 'Drive') {
      if (cars[car][1] < value2) {
        console.log('Not enough fuel to make that ride');
      } else {
        cars[car][0] += Number(value);
        cars[car][1] -= Number(value2);
        console.log(
          `${car} driven for ${value} kilometers. ${value2} liters of fuel consumed.`
        );
      }
      if (cars[car][0] >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete cars[car];
      }
    }

    if (command == 'Refuel') {
      let currentFuel = cars[car][1];
      let fuelToMax = 75 - currentFuel;

      cars[car][1] += Number(value);
      if (cars[car][1] > 75) {
        cars[car][1] = 75;
        console.log(`${car} refueled with ${fuelToMax} liters`);
      } else {
        console.log(`${car} refueled with ${value} liters`);
      }
    }

    if (command == 'Revert') {
      cars[car][0] -= Number(value);
      if (cars[car][0] < 10000) {
        cars[car][0] = 10000;
      } else {
        console.log(`${car} mileage decreased by ${value} kilometers`);
      }
    }

    index++;
  }

  let sorted = Object.entries(cars).sort((a, b) => b[1][0] - a[1][0]);

  for (let car of sorted) {
    console.log(
      `${car[0]} -> Mileage: ${car[1][0]} kms, Fuel in the tank: ${car[1][1]} lt.`
    );
  }
}

