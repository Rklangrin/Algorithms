# Binary Search Tree
- every node has 0, 1, or 2 children. No more. 
- The tree is organized so that to the left of any node will be values less than that node. To the right will be values greater than that node. 
  - This makes searching for elements logarithmic because if you have 16 numbers, then, ideally, it will take a maximum of 4 actions to find any given number. 
  - HOWEVER, if you create a BST from an already sorted list of numbers, then the worst case search time would be O(n) because the tree would start with some number at the top of the tree, likely the smallest or the largest in the list since it's sorted. Then every element after it would go to the right or the left, and there would be no branching the opposite way. 