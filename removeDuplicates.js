function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let arr = [1, 3, 5, 3, 7, 9, 1, 5, 1];
let result = removeDuplicates(arr);

console.log(result);
