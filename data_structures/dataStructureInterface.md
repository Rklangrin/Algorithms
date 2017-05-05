# Data Structure Interfaces

## Set
These contain items that are unique. You cannot add two of the same items to the set.

## Map
* key=value sets. 
* these have a set of keys that map to values
* No order

# Stack
Analogous to a "stack" of trays in a lunch room. When trays are cleaned they are placed on TOP of the stack of trays, and when someone grabs a new tray, they grab it from the TOP of the stack.
* has methods 'push' and 'pop' 
* LIFO (last in, first out)
* Arrays have a stack interface, but they don't adhere to having the sole ability to 'push' and 'pop'

## Queue
Analogous to any line that people have to wait in to get something. The person first in line is served first and, therefore, out first
* has methods enqueue (adds something) and dequeue (takes something off the front)
* FIFO (first in, first out)

** Priority Queues **
This is a type of queue, but certain items are given priority. 
* generally you have to worry about implementing an algorithm to check to make sure low priority items aren't waiting forever in the case that there are multiple high-priority items constantly being added to the queue. 