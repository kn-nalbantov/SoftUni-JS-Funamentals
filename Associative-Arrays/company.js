function companyUsers(input) {
    let collection = {};

    //parse input and store data
    for (let line of input) {
        let [company, employee] = line.split(' -> ');

        if (collection.hasOwnProperty(company)) {
            let hasToBeAdded = false;
            for (let i=0; i<collection[company].length; i++) {
                const element = collection[company][i];

                if (element == employee) {
                    //do nothing
                    break;
                } else {
                    hasToBeAdded = true;
                    break;
                }
            }
            if (hasToBeAdded) {
                collection[company].push(employee);
            }
        } else {
            collection[company] = [];
            collection[company].push(employee);
        }
    }
    console.log(collection)

    //sort by company name
    let sorted = Object.entries(collection);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    //print result
    for (let e of sorted) {
        let result = '' + e[0];
        for (let emp of e[1]) {
            result += '\n-- ' + emp;
        }
        console.log(result);
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);