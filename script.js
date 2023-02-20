// My Code
function generatePassword() {
// prompts for password criteria: 
 
var userChoice = window.prompt ("Welcome to Safe Password Generator! First Choose a character length between 8 and 128 characters")

// prompt for length of password (between 8-128)
if (userChoice < 8 || userChoice > 128) {
  alert("Please choose a number between 8 and 128") 
  return null;
}
else if(Number.isNaN(userChoice)) {
  alert ("Invalid. Please enter a number choice between 8 and 128")
  return generatePassword();
}
//arrays for password criteria 
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specialCharacters = ['!','@','#','$','^','&','*']
var comboArray = [] 


// prompt to include character types for password 
// confirm lowercase, uppercase, numeric, and/or special characters 
var lowLet = window.confirm ("Would you like to include lowercase letters?")
var upperLet = ("Would you like to include uppercase letters?")
var num = ("Would you like to include numbers?")
var special = ('Would you like to include special characters?')
// input needs to be validated w/ at least one character type selected 
// generated password that matches selected criteria 
// password displayed in alert or written to page
// combined list using .push method
if (lowLet) {comboArray.push(lowercase)};

if (upperLet) {comboArray.push(uppercase)};

if (num) {comboArray.push(numbers)};

if (special) {comboArray.push(specialCharacters)}; 



if (!lowLet && !upperLet && !num && !special) {
  alert ("Please choose at least one category")
  return "Choose at least one category"
}

var mergeList = comboArray.flat(1);

let password = " ";

for (let i =0; i <userChoice; i++) {
  var prime = Math.floor(Math.random() * mergeList.length);

  password += mergeList[prime];
}

return password;

}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
