function addAndSubtract(int, int2, int3) {
    function sum(a, b) {
      return a + b;
    }
    function subtract(x, y) {
      return x - y;
    }
    let result = subtract(sum(int, int2), int3);
    console.log(result);
  }