// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "/", "&", "*", "?"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "8", "9"];

var maxLength = 128;
var minLength = 8;

function generatePassword() {
  var newPassword = [];

  var potentialCharacters = [];

  var passwordLength = prompt("Please select a number between 8-128");

  if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
    alert("Select a number between 8-128");
    return;
  };

  var useNumbers = confirm("Would you like to add numbers?");
  var useSpecialCharacter = confirm("Would you like to add special characters?");
  var useLowerCase = confirm("would you like to add lower case letters?");
  var useUpperCase = confirm("would you like to add upper case letters?");

  if (!useNumbers && !useSpecialCharacter && !useLowerCase && !useUpperCase) {
    alert("You must select at least on option");
    return;
  };

if(useNumbers===true) {
  newPassword.push(getRandomCharacter(numbers));
  potentialCharacters=potentialCharacters.concat (numbers);
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
