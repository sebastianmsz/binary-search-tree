import Node from '../src/Node.js';

export default function Tree(array) {
	const tree = {
		root: buildTree(array),

		insert(value) {
			const newNode = new Node(value);

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
		},

		delete(value) {
			this.root = deleteNode(this.root, value);
		},

		find(value) {
			let current = this.root;

			while (current !== null) {
				if (current.data === value) {
					return current;
				} else if (value < current.data) {
					current = current.left;
				} else {
					current = current.right;
				}
			}
			return null;
		},

		levelOrder(callback) {
			if (this.root === null) return [];

			const queue = [this.root];
			const result = [];

			while (queue.length > 0) {
				const current = queue.shift();

				if (callback) {
					callback(current);
				} else {
					result.push(current.data);
				}

				if (current.left !== null) queue.push(current.left);
				if (current.right !== null) queue.push(current.right);
			}

			return result;
		},

		inOrder(callback) {
			return inOrderTraversal(this.root, callback);
		},

		preOrder(callback) {
			return preOrderTraversal(this.root, callback);
		},

		postOrder(callback) {
			return postOrderTraversal(this.root, callback);
		},

		height(node = this.root) {
			if (node === null) return -1;
			const leftHeight = this.height(node.left);
			const rightHeight = this.height(node.right);
			return Math.max(leftHeight, rightHeight) + 1;
		},

		depth(node) {
			let depth = 0;
			let current = this.root;

			while (current !== null) {
				if (current === node) return depth;
				if (node.data < current.data) {
					current = current.left;
				} else {
					current = current.right;
				}
				depth++;
			}
			return -1;
		},

		isBalanced() {
			const isBalancedSubtree = (node) => {
				if (node === null) return true;

				const leftHeight = this.height(node.left);
				const rightHeight = this.height(node.right);

				if (Math.abs(leftHeight - rightHeight) > 1) return false;

				return (
					isBalancedSubtree(node.left) &&
					isBalancedSubtree(node.right)
				);
			};

			return isBalancedSubtree(this.root);
		},

		rebalance() {
			const sortedArray = this.inOrder();
			this.root = buildTree(sortedArray);
		},
	};

	function buildTree(array) {
		const sortedArray = [...new Set(array)].sort((a, b) => a - b);

		if (sortedArray.length === 0) return null;

		const mid = Math.floor(sortedArray.length / 2);
		const root = new Node(sortedArray[mid]);

		root.left = buildTree(sortedArray.slice(0, mid));
		root.right = buildTree(sortedArray.slice(mid + 1));

		return root;
	}

	function deleteNode(root, value) {
		if (root === null) return null;

		if (value < root.data) {
			root.left = deleteNode(root.left, value);
		} else if (value > root.data) {
			root.right = deleteNode(root.right, value);
		} else {
			if (root.left === null && root.right === null) return null;

			if (root.left === null) return root.right;
			if (root.right === null) return root.left;

			const minRight = findMin(root.right);
			root.data = minRight.data;
			root.right = deleteNode(root.right, minRight.data);
		}
		return root;
	}

	function findMin(node) {
		while (node.left !== null) {
			node = node.left;
		}
		return node;
	}

	function inOrderTraversal(node, callback) {
		let result = [];
		if (node !== null) {
			result = result.concat(inOrderTraversal(node.left, callback));
			if (callback) {
				callback(node);
			} else {
				result.push(node.data);
			}
			result = result.concat(inOrderTraversal(node.right, callback));
		}
		return result;
	}

	function preOrderTraversal(node, callback) {
		let result = [];
		if (node !== null) {
			if (callback) {
				callback(node);
			} else {
				result.push(node.data);
			}
			result = result.concat(preOrderTraversal(node.left, callback));
			result = result.concat(preOrderTraversal(node.right, callback));
		}
		return result;
	}

	function postOrderTraversal(node, callback) {
		let result = [];
		if (node !== null) {
			result = result.concat(postOrderTraversal(node.left, callback));
			result = result.concat(postOrderTraversal(node.right, callback));
			if (callback) {
				callback(node);
			} else {
				result.push(node.data);
			}
		}
		return result;
	}

	return tree;
}
