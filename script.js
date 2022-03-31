//----------------------------------------------------------------------------------------
//tutor help:


// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`-=:;'[]{}";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var password = "";
  var length = prompt(
    "Enter the length of the password you desire between 8 - 128 characters long."
  );
  console.log(length);
  if (length >= 8 && length <= 128) {
    var isLowerCase = confirm("Do you want lower case in your password");
    var isUpperCase = confirm("Do you want Upper case in your password");
    var isNumber = confirm("Do you want numbers in your password");
    var isSymbols = confirm("Do you want symbols in your password?");
    for (let i = 0; i < length; i++) {
      console.log(isLowerCase);
      if (isLowerCase === true && password.length < length) {
        var position = Math.floor(Math.random() * lowerCase.length);
        password = password + lowerCase[position];
      }

      console.log(isUpperCase);
      if (isUpperCase === true && password.length < length) {
        var position = Math.floor(Math.random() * upperCase.length);
        password = password + upperCase[position];
      }

      console.log(isNumber);
      if (isNumber === true && password.length < length) {
        var position = Math.floor(Math.random() * numbers.length);
        password = password + numbers[position];
      }

      console.log(isSymbols);
      if (isSymbols === true && password.length < length) {
        var position = Math.floor(Math.random() * symbols.length);
        password = password + symbols[position];
      }
    }
  } else {
    alert("Invalid entry! Please enter a number beteen 8 - 128!");
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  




    






  