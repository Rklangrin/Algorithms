def binary_search(object, array)
  mid_point = (array.length - 1) / 2

  if array[mid_point] == object
    return mid_point
  elsif array == []
    return nil
  end

  if object < array[mid_point] && object >= array[0]
    binary_search(object, array[0...mid_point])
  elsif object > array[mid_point] && object <= array[-1]
    array[0..mid_point].length + binary_search(object, array[(mid_point+1)..-1])
  else
    nil
  end

end


# go to middle of array.
# if the object at the middle of the array is equal to desired object, return index of the array. 
# if the desired object is less than the object at the middle of the array, search left half of array
# else search right half of array
# repeat