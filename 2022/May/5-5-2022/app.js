// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// P: iterate through the array. square each number and add it to the total

// R: return the sum of numbers

// E: assume each value will be an array

function squareSum(numbers){
    let total = 0
    for (let i = 0; i < numbers.length; i++){
        total += Math.pow(numbers[i], 2)
    }
    return total
}