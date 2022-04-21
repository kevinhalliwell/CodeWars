// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// P: take in an array of test scores, average the numbers and compare to your score

// R: Return True if you're better, else False!

// E: iterate over the array and store each score. divide by the array length.

// E: ??

// E: ??

// P:

function betterThanAverage(classPoints, yourPoints) {
    let avg = yourPoints
    let num = classPoints.length + 1
    let total = 0
    for (i = 0; i < classPoints.length; i++){
        avg += classPoints[i]
    }
    total = avg/num
    if (yourPoints > total){
        return true
    } else {
        return false
    }
}