let arr = [100, 6, 2, 1, 29, 10, 4, 3, 22, 1, 7, 7, 100, 15000];

function mergeSort(array) {
  let length = array.length;
  if (length === 1){
    return array;
  }
  let mid = length/2;
  
  let leftSorted = mergeSort(array.slice(0, mid));
  let rightSorted = mergeSort(array.slice(mid, length));
  
  return stitch(leftSorted, rightSorted);
}

function stitch(leftHalf, rightHalf) {
  // compare leftHalf[0] with rightHalf[0] and put the smaller of the two values in new array;
  // repeat until one of the arrays is empty
  // whichever array is not empty, add the rest of that onto the new array
  let sortedArray = []
  while (true) {
    if (leftHalf[0] < rightHalf[0]) {
      sortedArray.push(leftHalf.shift());
    } else {
      sortedArray.push(rightHalf.shift());
    }
    
    if (leftHalf.length === 0) {
      sortedArray = sortedArray.concat(rightHalf);
      break;
    } else if (rightHalf.length === 0) {
      sortedArray = sortedArray.concat(leftHalf);
      break;
    }
  }
  return sortedArray;
}

console.log(mergeSort(arr));