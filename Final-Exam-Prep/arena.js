function arenaTier(input) {
  let gladiators = {};
  for (let line of input) {
    if (line.includes('->')) {
      let [gladiator, technique, skill] = line.split(' -> ');
      skill = Number(skill);

      if (gladiators.hasOwnProperty(gladiator)) {
        for (let g of gladiators[gladiator]) {
          if (g.hasOwnProperty(technique)) {
            if (g[technique] < skill) {
              g[technique] = skill;
            }
          } else {
            g[technique] = skill;
          }
        }
      } else {
        gladiators[gladiator] = [];
        let obj = {};
        obj[technique] = skill;
        gladiators[gladiator].push(obj);
      }
    } else if (line.includes('vs')) {
      //do sth else
      let [glad, glad2] = line.split(' vs ');

      if (gladiators.hasOwnProperty(glad) && gladiators.hasOwnProperty(glad2)) {
        let hasCommonTechnique = false;

        for (let technique of gladiators[glad]) {
          for (let x of Object.keys(technique)) {
              console.log(x);
          } 
        }
        for (let secondTechnique of gladiators[glad2]) {
            for (let x of Object.keys(secondTechnique)) {
                console.log(x);
            } 
        }
        console.log('---');
      }
    } else if (line.includes('Ave Cesar')) {
      break;
    }
  }

  console.log(gladiators);
}

