import java.lang.*;
import java.util.*;

public class Sort {
  
  public void bubbleSort(int[] array) {
    
    for (int k = 0; k < array.length; k++) {
      boolean swapped = false;
      for (int i = 0; i < length - 1; i++) {
        if (array[i] > array[i + 1]) {
          int temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        };
      }
      if (swapped = false) {
        break;
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
    
    sort.bubbleSort(array);
    
    sort.printArray(array);
    
  }
}