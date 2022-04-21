// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// P: iterate over an array and reorder the numbers from highest to lowest

// R: Example : n=5 --> [5,4,3,2,1]

// E:

const reverseSeq = n => {
    const result = [];
    
    for(let i = n; i > 0; i -= 1) {
        result.push(i);
    }
    
    return result;
};