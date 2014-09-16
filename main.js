// 1. Prompt user to enter phone number with dashes
// 2. Alert user if their phone number is valid - if 4th and 8th chars are "-"
// 		alert(userInput.charAt(0) === "-" && userInput.charAt(7) === "-")
// 3. Follow same procedure to validate: 
// 		birth date (xx/xx/xx)
// 		postal code (xxxxx OR xxxxx-xxxx)
// 		state abbreviation (2 characters, must be all caps)
// 		married (must be yes or no, can be any capitalization)
// 
// 	Bonus: try to break code by entering valid input and have it come back as invalid
// 		or vice versa


// Get user's phone number
var userInput = prompt("What is your phone number? (xxx-xxx-xxxx)");

// Validate format
alert(userInput.charAt(3) === "-" && userInput.charAt(7) === "-");


// Get user's birth date (xx/xx/xx)
var userInput = prompt("What's your birthday? (xx/xx/xx)");

// Validate format
alert(userInput.charAt(2) === "/" && userInput.charAt(5) === "/");


// Get user's postal code
var userInput = prompt("What's your zip code? xxxxx or xxxxx-xxxx")

// Validate zip code format
alert(userInput.length == 5 || (userInput.length == 10 && userInput.charAt(5) === "-"))


// Get user's state abbreviation
var userInput = prompt("What's your state's abbreviation?\n" +
 						"Must be 2 letters and capitalized");

// Validate that it is 2 letters and capitalized
alert(userInput.length == 2 && userInput === userInput.toUpperCase());

// Ask if user is married
var userInput = prompt("Are you married?");

// Validate that answer is either "yes" or "no" (yes, Yes, YES are all ok)
alert(userInput.toUpperCase() == 'YES' || userInput.toUpperCase() == 'NO')