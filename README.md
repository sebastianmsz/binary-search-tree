# Binary Search Tree🌲

This project implements a binary search tree data structure in JavaScript. The binary search tree is a data structure that allows for efficient insertion, deletion, and search operations. The tree is balanced using the AVL algorithm, which ensures that the height of the tree is logarithmic in the number of nodes. My main goal with this project was to learn more about binary search trees and to implement them from scratch.

## Getting Started

To use the binary search tree, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sebastianmsz/binary-search-tree.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd binary-search-tree
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Import the `Tree` class:**

    ```javascript
    import Tree from './src/Tree.js';
    ```

2. **Create a new tree:**

    ```javascript
    const numbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
    const tree = new Tree(numbers);
    ```

3. **Use the tree methods:**

    - `insert(value)`: Inserts a value into the tree.
    - `deleteItem(value)`: Deletes a value from the tree.
    - `find(value)`: Finds a value in the tree.
    - `levelOrder()`: Returns an array of values in level order.
    - `inOrder()`: Returns an array of values in in-order traversal.
    - `preOrder()`: Returns an array of values in pre-order traversal.
    - `postOrder()`: Returns an array of values in post-order traversal.
    - `height(node)`: Returns the height of the given node.
    - `depth(node)`: Returns the depth of the given node.
    - `isBalanced()`: Checks if the tree is balanced.
    - `rebalance()`: Rebalances the tree.

## Running Tests

To run the tests, execute the following command:

```bash
node src/script.js
```

## Example

```javascript
import Tree from './src/Tree.js';

const numbers = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(numbers);

console.log('Tree is balanced:', tree.isBalanced());

console.log('Level order:', tree.levelOrder());
console.log('Pre-order:', tree.preOrder());
console.log('Post-order:', tree.postOrder());
console.log('In-order:', tree.inOrder());

tree.insert(101);
tree.insert(102);
tree.insert(103);

console.log('Tree is balanced:', tree.isBalanced());

tree.rebalance();

console.log('Tree is balanced:', tree.isBalanced());

console.log('Level order:', tree.levelOrder());
console.log('Pre-order:', tree.preOrder());
console.log('Post-order:', tree.postOrder());
console.log('In-order:', tree.inOrder());
```

## Contributing

Contributing is welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
