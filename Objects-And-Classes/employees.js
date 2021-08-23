function employees(employees) {
    class Employees {
      constructor(name, persNum) {
        this.name = name;
        this.persNum = persNum;
      }
    }
  
    for (let i = 0; i < employees.length; i++) {
      let name = employees[i];
      let num = employees[i].length;
  
      let employee = new Employees(name, num);
      console.log(
        `Name: ${employee.name} -- Personal Number: ${employee.persNum}`
      );
    }
  }