function partyTime(input) {
  let guestList = [];
  let vipGuestList = [];

  let index = 0;
  while (input[index] !== 'PARTY') {
      if (isNaN(input[index][0])) {
          guestList.push(input[index]);
      } else {
          vipGuestList.push(input[index]);
      }
    index++;
  }

  for (let i = index + 1; i < input.length; i++) {
      const guest = input[i];
      if (guestList.includes(guest)) {
          let temp = guestList.findIndex(x => x == guest);
          guestList.splice(temp, 1);
      }
      if (vipGuestList.includes(guest)) {
          let temp = vipGuestList.findIndex(x => x == guest);
          vipGuestList.splice(temp, 1);
      }
  }

  console.log(guestList.length + vipGuestList.length);
  vipGuestList.forEach(element => {
      console.log(element);
  });
  guestList.forEach(element => {
      console.log(element);
  })
}
