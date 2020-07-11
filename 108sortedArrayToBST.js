// View the full problem and run the test cases at:
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