function sum(num) {
    let myStr = num.toString();
    let sumNum = 0;
    for (let i=0; i<myStr.length; i++) {
        sumNum += Number(myStr[i]);
    }
    console.log(sumNum);
 }