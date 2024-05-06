import Node from './Node';

export default function Tree(arr) {
	this.root = buildTree(arr);
	this.insert = insert;
	this.delete = deleteItem;
	this.find = find;
}

function buildTree(arr) {
	if (!arr || arr.length === 0) {
		return null;
	}

	const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

	let middleIndex = Math.floor(uniqueSortedArr.length / 2);
	let leftHalf = arr.slice(0, middleIndex);
	let rightHalf = arr.slice(middleIndex + 1);

	return new Node(
		arr[middleIndex],
		buildTree(leftHalf),
		buildTree(rightHalf),
	);
}

function insert(value) {
	let newNode = new Node(value, null, null);
	if (this.root === null) {
		this.root = newNode;
		return;
	}

	let current = this.root;
	while (true) {
		if (value < current.data) {
			if (current.left === null) {
				current.left = newNode;
				return;
			}
			current = current.left;
		} else {
			if (current.right === null) {
				current.right = newNode;
				return;
			}
			current = current.right;
		}
	}
}

function deleteItem(value) {
	this.root = _deleteItemHelper(this.root, value);

	function _deleteItemHelper(node, value) {
		if (node === null) {
			return null;
		}

		if (value < node.data) {
			node.left = _deleteItemHelper(node.left, value);
		} else if (value > node.data) {
			node.right = _deleteItemHelper(node.right, value);
		} else {
			if (node.left === null && node.right === null) {
				return null;
			}

			if (node.left === null) {
				return node.right;
			} else if (node.right === null) {
				return node.left;
			}

			let successor = node.right;
			while (successor.left !== null) {
				successor = successor.left;
			}

			node.data = successor.data;

			node.right = _deleteItemHelper(node.right, successor.data);
		}

		return node;
	}
}

function find(value) {
	let current = this.root;
	while (current !== null) {
		if (value === current.data) {
			return current;
		} else if (value < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
	}
	return null;
}
