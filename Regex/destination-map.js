function destinationMapper(input) {
  let destinations = [];
  let travelPoints = 0;
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;

  let matches = [...input.matchAll(pattern)];

  for (let match of matches) {
      destinations.push(match[2]);
      travelPoints += match[2].length;
  }
  console.log(`Destinations: ${destinations.join(', ')}\nTravel Points: ${travelPoints}`);
}
