### SOLVD TASK № 10

# Custom hash table realization

## Overview

CustomHashTable is a custom implementation of a hash table in JavaScript. It utilizes a combination of arrays and linked lists to handle hash collisions and provides methods for insertion, retrieval, deletion, and resizing of the hash table. The hash function used is an adaptation of the djb2 algorithm .

## Features

-   Insertion

-   Retrieval

-   Deletion
-   Resizing
-   Iteration
-   Hash function based on djb2 algorithm

## Collision handling details

-   Hash table use separate chaining (using linked lists) It originally stores data as [key, value] array if the hash was not taken, but if it is class creates LinkedList in which previous value and new value is chained

-   There is a loading factor provided which helps us to determine if we have more key-value pairs than 3/4 of table length, than we double our table size, generating new hash value for each key-value pair in table

## Analysis and trade-offs

- Probably with a better hash function we would not have to change hash for each key-value pair while resizing hash-table.

- Insertion: O(1) on average, 𝑂(𝑛) O(n) in the worst case due to resizing.

- Retrieval: O(1) on average, 𝑂(𝑚) O(m) in the worst case - for searching an element in a Linked List at a hashed index

- Deletion: O(1) on average, O(m) in the worst case - for removing an element from a linked list at the hashed index.

### Example

```javascript
import { CustomHashTable } from "./CustomHashTable.js";

// Create a new hash table
const hashTable = new CustomHashTable();

// Insert key-value pairs
hashTable.insert("key1", "value1");
hashTable.insert("key2", "value2");

// Retrieve a value
console.log(hashTable.get("key1")); // Output: value1

// Delete a key-value pair
hashTable.delete("key2");

// Print the hash table
hashTable._print();
```



In order to run some example usage run this command

```bash
npm run example
```

### Tests are written using jest testing framework

In order to run provided tests run this commands

```bash
npm install --save-dev jest
npm test
```
