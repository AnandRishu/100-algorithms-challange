// Given a sorted array of integers a, find an integer x from a such that the value of 
// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x) is the smallest possible.
// If there are several possible answers, output the smallest one.

const absoluteValueSum = arr => {
    if (Array.isArray(arr) === false) return 'Input should be an array of integers.';
    if (arr.length === 0) return 'Empty array.';

    // check array length is even
    const isEven = arr.length % 2 === 0;

    return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
};



module.exports = {
    absoluteValueSum: absoluteValueSum
};

// console.log(absoluteValueSum([2, 4, 7]));
// console.log(absoluteValueSum([2, 4, 7, 6]));
// console.log(absoluteValueSum([2, 4, 7, 6, 6]));
// console.log(absoluteValueSum([2, 4, 7, 6, 6, 8]));