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

const quickSort = array => {
  if(array.length <= 1) { return array; }

  const pivot = array[0];
  const left = array.slice(1).filter(el => el <= pivot);
  const right = array.slice(1).filter(el => el > pivot);

  return quickSort(left).concat([pivot]).concat(quickSort(right));

};

quickSort([1,2,3,4,5]);
quickSort([5,4,3,2,1]);
quickSort([5,2,7,10,-1,0]);
quickSort([20, 1000, 2, 18, 9, 30, 1, 1, 1000]);
quickSort([]);

const mergeSort = () => {

};

mergeSort([1,2,3,4,5]);
mergeSort([5,4,3,2,1]);
mergeSort([5,2,7,10,-1,0]);
mergeSort([20, 1000, 2, 18, 9, 30, 1, 1, 1000]);
mergeSort([]);

const heapSort = () => {

};
