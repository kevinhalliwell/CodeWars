// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// P: Convert a string to a number

// R: return numbers from a string

// E: Examples: "1234" --> 1234 "605"  --> 605 "1405" --> 1405 "-7" --> -7

var stringToNumber = function(str){
    let num = Number(str)
    return num;
}
