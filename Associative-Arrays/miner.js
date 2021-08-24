function miner(input) {
    let resources = {};

    for (let i=0; i<input.length; i+=2) {
        const element = input[i];
        const value = Number(input[i+1]);

        if (resources.hasOwnProperty(element)) {
            resources[element] += value;
        } else {
            resources[element] = value;
        }
    }
    console.log(resources);

    for (let key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '10'
]);

miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])