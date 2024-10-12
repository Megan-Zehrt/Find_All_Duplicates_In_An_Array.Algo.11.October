// 442. Find All Duplicates in an Array



// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output.







/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    
    let map = new Map()

    for(let num of nums){

        if(map.has(num)){
            let count = map.get(num)
            map.set(num, count+1)
        }else{
            map.set(num, 1)
        }
    }

    let duplicates = []

    for(let [num, count] of map){

        if(count > 1){
            duplicates.push(num)
        }
    }

    return duplicates
};