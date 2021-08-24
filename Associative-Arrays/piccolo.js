function piccolo(input) {
  let atParkingLot = [];

  for (let i = 0; i < input.length; i++) {
    const [command, car] = input[i].split(', ');

    if (command == 'IN') {
      if (!atParkingLot.includes(car)) {
        atParkingLot.push(car);
      }
    }

    if (command == 'OUT') {
      if (atParkingLot.includes(car)) {
        let index = atParkingLot.findIndex((x) => x == car);
        atParkingLot.splice(index, 1);
      }
    }
  }

  atParkingLot.sort((a, b) => a.localeCompare(b));

  if (atParkingLot.length == 0) {
    console.log('Parking Lot is Empty');
  } else {
    atParkingLot.forEach((element) => {
      console.log(element);
    });
  }
}
