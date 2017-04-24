
public class Sort {
  
  public void selectionSort(int[] array) {
    
    for (int k = 0; k < array.length - 1; k++) {
      int min = array[k];
      int index = k;
      for (int i = k + 1; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
          index = i;
        }
      }
      
      if (index != k) {
        array[index] = array[k];
        array[k] = min;
      };
      
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