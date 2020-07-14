// 215. Kth Largest Element in an Array

// Example 1:

//     Input: [3, 2, 1, 5, 6, 4] and k = 2
// Output: 5
// Example 2:

//     Input: [3, 2, 3, 1, 2, 4, 5, 5, 6] and k = 4
// Output: 4
// Note:
//     You may assume k is always valid, 1≤ k≤ array 's length.

var findKthLargest = function (nums, k) {
    nums = nums.sort((a, b) => a - b);
    return nums[nums.length - k]
};


