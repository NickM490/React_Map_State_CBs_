import React from 'react';

const nums = [1, 2, 3, 4, 5];
const newNums = [];


function double(num) {
    return num * 2
}


function Iteration() {
    for (let i = 0; i < nums.length; i++) {
        newNums.push(nums[i] * 2);
    }

    const newNumbs = nums.map(double)
    console.log(newNumbs)
    console.log(newNums);
}




export default Iteration;


