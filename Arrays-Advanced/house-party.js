function houseParty(guests) {
    let listOfGuests = [];
    for (let element of guests) {
      let name = element.split(' ')[0];
      if (element.includes('is going')) {
        if (listOfGuests.includes(name)) {
          console.log(name + ' is already in the list!');
        } else {
          listOfGuests.push(name);
        }
      }
      if (element.includes('is not going')) {
        if (!listOfGuests.includes(name)) {
          console.log(name + ' is not in the list!');
        } else {
          listOfGuests.splice(listOfGuests.indexOf(name), 1);
        }
      }
    }
    console.log(listOfGuests.join('\n'));
  }
  