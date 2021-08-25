function extractFile(input) {
  //use lastindex of the find the \ char
  let temp = input.substring(input.lastIndexOf('\\') + 1);

  let fileName = temp.substring(0, temp.lastIndexOf('.'));
  console.log(`File name: ${fileName}`);

  let extension = temp.substring(temp.lastIndexOf('.') + 1);
  console.log(`File extension: ${extension}`);
}
