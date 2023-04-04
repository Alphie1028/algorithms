let arr = [20,1,841,23,10,40,41,89,154,62,34,81];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

let target = 19;
let target2 = 41
console.log(binarySearch(arr, target)); // Output: -1
console.log(binarySearch(arr, target2)); // Output: 6