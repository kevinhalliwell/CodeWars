// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// P: iterate through the array. if the value is higher than 0 add to sum

// R: return the sum of numbers

// E: assume each value will be a number

function positiveSum(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}