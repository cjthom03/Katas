const bsearch = (array, target) => {
  if(!array.length) { return -1; }

  //find the midpoint
  const mid = Math.floor(array.length / 2);

  if(array[mid] === target) {
    return mid;
  } else if(array[mid] > target) {
    const left = array.slice(0, mid);
    return bsearch(left, target);
  } else {
    const right = array.slice(mid + 1);
    console.log(right);
    const rightResult = bsearch(right, target);
    if(rightResult >= 0) {
      return mid + 1 + rightResult;
    } else {
      return rightResult;
    }
  }
};

// bsearch([1,2,3,4,5], 3) => 2
// bsearch([1,2,3,4,5], 4) => 4
// bsearch([1,2,3,4,5], 1) => 0
// bsearch([1,2,3,4,5], 0) => -1

const quicksort = () => {

};
