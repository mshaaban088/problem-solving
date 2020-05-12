function binarySearch_recursive(arr, left, right) {
  if (left === right) return arr[left];

  const mid = left + parseInt((right - left) / 2);
  const leftSize = mid - left;
  const rightSize = right - (mid + 1);
  const midValue = arr[mid];
  const leftMax = arr[mid - 1];
  const rightMin = arr[mid + 1];

  if (midValue === leftMax && leftSize % 2 === 0) {
    return binarySearch_recursive(arr, left, mid - 1);
  } else if (midValue === rightMin && rightSize % 2 === 1) {
    return binarySearch_recursive(arr, left, mid);
  } else if (midValue === rightMin && rightSize % 2 === 0) {
    return binarySearch_recursive(arr, mid + 1 + 1, right);
  } else if (midValue === leftMax && leftSize % 2 === 1) {
    return binarySearch_recursive(arr, mid + 1, right);
  } else {
    return midValue;
  }
}

function binarySearch(arr, left, right) {
  if (arr.length == 0) {
    return -1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === arr[mid + 1]) {
      if (mid % 2 === 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    } else if (arr[mid] === arr[mid - 1]) {
      if (mid % 2 === 0) {
        right = mid - 1;
      } else {
        left = mid;
      }
    } else {
      return arr[mid];
    }
  }
  return -1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
  return binarySearch(nums, 0, nums.length);
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]), 2);
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]), 10);
console.log(singleNonDuplicate([1, 2, 2, 3, 3]), 1);
console.log(singleNonDuplicate([1, 1, 2, 2, 3]), 3);
