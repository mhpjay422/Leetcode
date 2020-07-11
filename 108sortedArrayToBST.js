// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height - balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

//     Given the sorted array: [-10, -3, 0, 5, 9],

//     One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height balanced BST:

//      0 
//     / \
//   -3   9
//   /   / 
// -10  5

//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function sortedArrayToBST(nums) {
    if (!nums.length) return null;

    let midIdx = Math.floor(nums.length / 2);
    let midVal = nums[midIdx];
    let leftSub = nums.slice(0, midIdx);
    let rightSub = nums.slice(midIdx + 1);
    let tree = new TreeNode(midVal, sortedArrayToBST(leftSub), sortedArrayToBST(rightSub));

    return tree;
}