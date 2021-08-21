function train(arr) {
    let myTrainArr = arr[0].split(' ');
  
    const command = 'Add';
    const cappacity = Number(arr[1]);
    for (let i = 2; i < arr.length; i++) {
      if (arr[i].includes(command)) {
        myTrainArr.push(arr[i].split(' ')[1]);
      } else {
        let additionalPassengers = Number(arr[i]);
        for (let j = 0; j < myTrainArr.length; j++) {
          let currentPassengers = Number(myTrainArr[j]);
          if (additionalPassengers + currentPassengers <= cappacity) {
            myTrainArr[j] = additionalPassengers + currentPassengers;
            break;
          }
        }
      }
    }
    console.log(myTrainArr.join(' '));
  }