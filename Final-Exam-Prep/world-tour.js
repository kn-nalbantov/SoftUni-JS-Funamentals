function worldTour(input) {
  let destination = input.shift();

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'Travel') {
      break;
    }
    const line = input[i];

    let [command, value, value2] = line.split(':');

    if (command == 'Add Stop') {
      if (Number(value) >= 0 && Number(value) < destination.length) {
        destination =
          destination.slice(0, Number(value)) +
          value2 +
          destination.slice(Number(value));
        console.log(destination);
      }
    }

    if (command == 'Remove Stop') {
      if (
        Number(value) >= 0 &&
        Number(value) < destination.length &&
        Number(value2) >= 0 &&
        Number(value2) < destination.length
      ) {
        destination =
          destination.slice(0, value) + destination.slice(Number(value2) + 1);
        console.log(destination);
      }
    }

    if (command == 'Switch') {
      let pattern = new RegExp(value, 'g');
      destination = destination.replace(pattern, value2);
      console.log(destination);
    }
  }

  console.log(`Ready for world tour! Planned stops: ${destination}`);
}

