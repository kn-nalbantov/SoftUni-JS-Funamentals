function companyUsers(input) {
  let result = {};

  input.forEach((element) => {
    const [company, employee] = element.split(' -> ');

    result[company] = employee;
  });


  for (let key in result) {
      console.log(`${key}\n-- ${result[key]}`);
  }
}
