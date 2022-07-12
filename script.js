// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextarea = document.querySelector("#password");

  passwordTextarea.value = password;
}

//inital prompt to start new password generator
function generatePassword() {
  var generatedPassword = "";
  var allowedCharacters = [];
  var passwordLength = prompt("how long would you like your password to be?");

  // asks if the user wants upper case letters added
  var passwordUppercase = confirm("do you want to use upper case letters?");
  if (passwordUppercase)
    allowedCharacters = [...allowedCharacters, ...upperCasedCharacters];
  console.log(allowedCharacters);

  //asks if the user wants lower case letters added
  var passwordLowercase = confirm("do you want lowercase letters?");
  if (passwordLowercase);
  allowedCharacters = [...allowedCharacters, ...lowerCasedCharacters];
  console.log(allowedCharacters);

  //asks if the user wants numbers added
  var passwordNumeric = confirm("do you want numeric?");
  if (passwordNumeric)
    allowedCharacters = [...allowedCharacters, ...numericCharacters];
  console.log(allowedCharacters);

  //asks if the user wants special charaters used
  var passwordSpecial = confirm("do you want special characters?");
  if (passwordSpecial)
    allowedCharacters = [...allowedCharacters, ...specialCharacters];
  console.log(allowedCharacters);

  //confirms password length
  for (let i = 0; i < passwordLength; i++) {
    //select a random character from the allowedCharacters array and add it to the generatedPassword string
    var randomCharacter =
      allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
    generatedPassword += randomCharacter;
  }

  return generatedPassword;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
