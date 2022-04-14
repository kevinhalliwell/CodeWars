//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

//The returned format must be correct in order to complete this challenge.
//Don't forget the space after the closing parentheses!

//P: take in an array of numbers and output like a phone number

//R: return a phone number in the correct format (123) 456-7890

//E: concantate each part of the array and add spaces etc. ( + 1 + 2 + 3 + ) = (123)
// iterate over the array ino one string. splice each piece into the larger string you want
// (next example loading...)

//P: start with formatted string you want. iterate and replace each x with each index of the array
function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
  