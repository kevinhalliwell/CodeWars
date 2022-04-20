// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo

// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"

// P: enter a name both upper and lower case. check to see if the name starts with the letter r. if it does concatenate the name with plays banjo, if not concatenat with does not play banjo

// R:  if it does concatenate the name with plays banjo, if not concatenate with does not play banjo

// E: check the word using the starts with method

function areYouPlayingBanjo(name) {
	if (name.startsWith("R") === true || name.startsWith("r") === true) {
		name = name + " plays banjo"
	} else {
		name = name + " does not play banjo"
	}
    return name;
}