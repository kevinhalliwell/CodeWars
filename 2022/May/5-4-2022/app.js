// Write a function called repeatStr which repeats the given string string exactly n times.

// Example repeatStr(6, "I") // "IIIIII"

// Example repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// P: repeat and concatenate the string a number of N times

// R: return the longer sting

// E: assume each value will be a string

function repeatStr (n, s) {
    let str = ""
    for (let i = 0; i < n; i++){
        str = str + s
    }
    return str
}