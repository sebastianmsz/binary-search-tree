import Tree from '../src/Tree';

describe('Binary Search Tree', () => {
	let tree;
	beforeEach(() => {
		const data = [1, 7, 4, 23, 8, 9, 3, 5, 67, 324, 6345];
		tree = new Tree(data);
	});

	describe('buildTree', () => {
		it('should build a balanced tree from an array', () => {
			expect(tree.root.data).toBeGreaterThan(tree.root.left.data);
			expect(tree.root.data).toBeLessThan(tree.root.right.data);
		});
	});

	describe('insert', () => {
		it('should insert a new node with the given value', () => {
			tree.insert(10);
			const node = tree.find(10);
			expect(node).toBeDefined();
			expect(node.data).toBe(10);
		});
	});

	describe('delete', () => {
		it('should delete the node with the given value', () => {
			tree.delete(23);
			const node = tree.find(23);
			expect(node).toBeNull();
		});
	});

	describe('find', () => {
		it('should find the node with the given value', () => {
			const node = tree.find(67);
			expect(node).toBeDefined();
			expect(node.data).toBe(67);
		});

		it('should return null if the value is not found', () => {
			const node = tree.find(100);
			expect(node).toBeNull();
		});
	});

	describe('levelOrder', () => {
		it('should traverse the tree in level order', () => {
			const expected = [9, 7, 23, 4, 8, 67, 3, 5, 324, 6345];
			const result = tree.levelOrder();
			expect(result).toEqual(expected);
		});
	});

	describe('inOrder', () => {
		it('should traverse the tree in in-order', () => {
			const expected = [3, 4, 5, 7, 8, 9, 23, 67, 324, 6345];
			const result = [];
			tree.inOrder((value) => result.push(value));
			expect(result).toEqual(expected);
		});
	});

	describe('preOrder', () => {
		it('should traverse the tree in pre-order', () => {
			const expected = [9, 7, 4, 3, 5, 8, 23, 67, 324, 6345];
			const result = [];
			tree.preOrder((value) => result.push(value));
			expect(result).toEqual(expected);
		});
	});

	describe('postOrder', () => {
		it('should traverse the tree in post-order', () => {
			const expected = [3, 5, 4, 8, 7, 67, 324, 6345, 23, 9];
			const result = [];
			tree.postOrder((value) => result.push(value));
			expect(result).toEqual(expected);
		});
	});

	describe('height', () => {
		it('should return the height of the given node', () => {
			expect(tree.height(tree.root)).toBe(4);
			expect(tree.height(tree.root.left.left)).toBe(2);
		});
	});

	describe('depth', () => {
		it('should return the depth of the given node', () => {
			expect(tree.depth(tree.root)).toBe(0);
			expect(tree.depth(tree.root.left.right)).toBe(2);
		});
	});

	describe('isBalanced', () => {
		it('should return true if the tree is balanced', () => {
			expect(tree.isBalanced()).toBe(true);
		});

		it('should return false if the tree is not balanced', () => {
			tree.insert(1);
			tree.insert(0);
			expect(tree.isBalanced()).toBe(false);

			tree.delete(1);
			tree.insert(100);
			tree.insert(101);
			expect(tree.isBalanced()).toBe(false);
		});
	});

	describe('rebalance', () => {
		it('should rebalance the tree', () => {
			tree.insert(1);
			tree.insert(0);

			tree.rebalance();
			expect(tree.isBalanced()).toBe(true);
		});

		it('should rebalance the tree after right-leaning insertion', () => {
			tree.delete(1);
			tree.insert(100);
			tree.insert(101);

			tree.rebalance();
			expect(tree.isBalanced()).toBe(true);
		});
	});
});
