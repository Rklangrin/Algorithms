public class Sort {
  
  public void selectionSort(int[] array) {
    int temp;

    for (int i = 1; i < array.length; i++) {
      for (int k = i; k > 0; k--) {
        // this loop will increase the range of what numbers are being compared within the array
        if (array[k] < array[k - 1]) {
          // compares each number to the preceding number and keep moving the smaller number down the line until
          // it is no longer smaller than the preceding number. 
          temp = array[k];
          array[k] = array[k-1];
          array[k-1] = temp;
        } else {
          continue;
        }
      }
    }
    
  }
  
  
  public void printArray(int[] array) {
    for (int i = 0; i < array.length; i++) {
      System.out.print(array[i] + " ");
    }
  }
  
  public static void main(String[] args) {

    Sort sort = new Sort();
    int[] array = { 9, 8, 2, 4, 8, 100, 4, 2, 55, 6, 8, 15, 5, 19, 53, 9, 25 };
    
    sort.selectionSort(array);
    
    sort.printArray(array);
    
  }
}