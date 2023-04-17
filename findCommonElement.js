function findCommonElement(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 3, 4, 8, 9, 10, 1];

let result = findCommonElement(arr1, arr2);
console.log(result);
