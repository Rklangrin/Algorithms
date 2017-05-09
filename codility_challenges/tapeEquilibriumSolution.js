function solution(A) {
    let length = A.length;
    let leftHalf = A[0];
    let rightHalf = 0;
    
    // if the array is only 2 elements big, then the smallest possible difference has 
    // to be A[1] - A[0] since that's the only possible difference in values.
    if (length == 2) { 
        return A[1] - A[0]; 
    } else if (length == 1) {
        return A[1];
    }
    
    for (let i = 1; i < length; i++) {
        rightHalf += A[i];
    }
    
    let currentDiff;
    let minDiff = Math.abs(leftHalf - rightHalf);
    
    for (let i = 1; i < length - 1; i++) {
        leftHalf += A[i];
        rightHalf -= A[i]; 
        currentDiff = Math.abs(leftHalf - rightHalf);
        minDiff = (currentDiff < minDiff) ? currentDiff : minDiff;
    }
    
    return minDiff;
}


// Time Complexity:  O(n)


