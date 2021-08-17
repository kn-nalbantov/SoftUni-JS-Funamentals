function printAndSum(numOne, numTwo) {
    let print = '';
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++) {
        print += `${i} `;
        sum += i;
    }
    console.log(print);
    console.log(`Sum: ${sum}`);
}