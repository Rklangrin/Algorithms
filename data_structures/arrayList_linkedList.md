ArrayList and LinkedLists only become important with languages that aren't garbage-collected. With languages like Ruby and Javascript, this all happens under the hood and you never have to worry about it. 

# ArrayList
- Cheap/Easy to "gets" an element because you have indexing. So when you want the ith element in an array, you can say array.gets(i) and the computer knows exactly where in memory that ith element is. 
- Expensive/Difficult to delete items that aren't the last item in the list because then you have to shift every item after the deletion to fix the indexing. 

# LinkedList
- Cheap/Easy to "puts" an element because you can change the pointer from the previous element to the element directly after the deleted element. 
- Expensive/Difficult to "gets' an element because their is no index. Only way to find it is to start from the beginning of the list and trace the each node to the next node until you find it. 