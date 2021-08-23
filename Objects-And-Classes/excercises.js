

function inventory(heroData) {


  let heroArr = [];

  for (let i = 0; i < heroData.length; i++) {
    const element = heroData[i];
    let hero = {
      name: 'name',
      level: 0,
      items: [],
    };

    let [heroName, heroLevel, heroItemsAsStr] = element.split(' / ');

    //sort items by alphabetical order

    let heroItems = [];
    heroItems.push(heroItemsAsStr.split(','));
    heroItems.sort((a, b) => a - b);
    console.log(heroItems)

    hero.name = heroName;
    hero.level = heroLevel;
    hero.items = heroItems;

    heroArr.push(hero);
  }
  console.log(heroArr);
  //heroArr.sort(compareFn);

  function compareFn(a, b) {
    //if a is before b
    return -1
    //if b is before a
    return 1
    //if same
    return 0
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
