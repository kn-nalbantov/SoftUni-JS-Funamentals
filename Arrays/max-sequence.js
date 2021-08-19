function maxSequence(arr) {
    let longest = [];
    longest.push(arr[0]);
    let currentLongest = [arr[0]];
  
    for (let i = 1; i < arr.length; i++) {
  
      if (currentLongest[0] == arr[i]) {
        currentLongest.push(arr[i]);
      } else {
        currentLongest = [];
        currentLongest.push(arr[i]);
      }
  
      if (currentLongest.length > longest.length) longest = currentLongest;
    }
  
    console.log(longest.join(' '));
  }