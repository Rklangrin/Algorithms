let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivot = arr[arr.length -1];
  let left = [];
  let right = [];
  
  for (let i = 0; i < (arr.length -1); i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  let sortedLeft = quickSort(left);
  let sortedRight = quickSort(right);
  
  return sortedLeft.concat(pivot, sortedRight);
} 

console.log(quickSort([1, 2, 4, 9, 3, 7, 5, 3, 4]))