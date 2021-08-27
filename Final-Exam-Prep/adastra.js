function adAstra([input]) {
  let pattern = /(#|\|)([A-Za-z]+\s*[A-Za-z]+)\1([0-9]{2}\/[0-9]{2}\/[0-9]{2})\1([0-9]{1,5})\1/g;

  let daysToLast = 0;
  let calories = [];

  let matches = [...input.matchAll(pattern)];

  for (let match of matches) {
    calories.push(Number(match[4]));
  }

  let totalCalories = 0;
  for (let item of calories) {
    totalCalories += item;
  }

  daysToLast = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${daysToLast} days!`);

  for (let match of matches) {
    console.log(
      `Item: ${match[2]}, Best before: ${match[3]}, Nutrition: ${match[4]}`
    );
  }
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);

adAstra([
  '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|',
]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
