import Node from './Node';

export default function Tree(arr) {
	this.root = buildTree(arr);
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
