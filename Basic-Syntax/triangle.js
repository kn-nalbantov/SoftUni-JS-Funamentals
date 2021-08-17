function triangleOfNumbers(num) {
    let print = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            print += `${i} `;
        }
        console.log(print);
        print = '';
    }
}