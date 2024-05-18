import Tree from '../src/Tree.js';

function generateRandomNumbers(length, max) {
	const numbers = [];
	for (let i = 0; i < length; i++) {
		numbers.push(Math.floor(Math.random() * max));
	}
	return numbers;
}

const numbers = generateRandomNumbers(10, 100);

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
