function factorialDivision(int, int2) {
    function factorial(n) {
      let answer = 1;
      if (n == 0 || n == 1) {
        return answer;
      } else {
        for (let i = n; i >= 1; i--) {
          answer = answer * i;
        }
        return answer;
      }
    }
    console.log((factorial(int) / factorial(int2)).toFixed(2));
  }