var userInput = prompt("This application checks whether or not the word you enter is a palindrome! Enter a word")

var pal = "racecar";
var notPal = "hello"

function palindrome(string){
	var check = string.split("").reverse().join("");

	if (check === string){
		return true
	}
	else { 
		return false
	}
}

console.log(palindrome(userInput))
console.log(palindrome(pal))
console.log(palindrome(notPal))