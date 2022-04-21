// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// P: take in three values H, M, and S. H will be less than 24, M will be less than 59, S will be less than 59

// R: return the time in milliseconds from midnight

// E: Each 1 second is 1000 milliseconds

// P: convert hours and minutes to seconds. add total to number of seconds and multiply by 1000

function past(h, m, s){
    // #Happy Coding! ^_^
    let milliseconds = 0
    let hoursConverted = (h*60)*60
    let minConverted = m*60
    s += hoursConverted + minConverted
    milliseconds = s * 1000
    return milliseconds
}