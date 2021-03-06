let quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivot = arr[arr.length -1];
  // pivot doesn't have to be the last element in the array. 
  let left = [];
  let right = [];
  
  for (let i = 0; i < (arr.length -1); i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];

  // if someArray = [1, 8, 6] and otherArray = [4, 2, 6]
  // then [...someArray, ...otherArray] essentially just concatenates the two arrays together
  // and returns [1, 8, 6, 4, 2, 6]
} 

console.log(quickSort([1, 2, 4, 9, 3, 7, 5, 3, 4]))


// Worst case O(n^2) because if a sorted or nearly sorted array was passed to quickSort, 
// and the pivot was the last number in the array, then it would have to compare every number against every other number in the array.
// (or nearly every other if it is nearly sorted) 

// One way to get around this is to implement "quickSort 3," which more selectively chooses a pivot.
// You compare the first, last, and middle number in an array 
// then pick the number to be the pivot that is the middle of those three numbers.