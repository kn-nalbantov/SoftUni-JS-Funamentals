function towns(townArr) {
    for (let i = 0; i < townArr.length; i++) {
      let townInfo = townArr[i];
      let [currentTown, latitude, longitude] = townInfo.split(' | ');
      let townObj = {
        town: currentTown,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2),
      };
      console.log(townObj);
    }
  }