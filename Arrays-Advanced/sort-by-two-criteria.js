function sortByCriteria(arr) {
    arr.sort(compareFn);
    function compareFn(a, b) {
      if (a.length - b.length < 0) {
        return -1;
      }
      if (a.length - b.length > 0) {
        return 1;
      }
      if (a.length - b.length === 0) {
        if (a.charCodeAt(0) - b.charCodeAt(0) <= 0) {
          return -1;
        } else {
          return 1;
        }
      }
    }
    console.log(arr.join('\n'));
  }