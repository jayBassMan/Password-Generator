// Assignment Code
//button querySelector
var generateBtn = document.querySelector("#generate");

// Get the element by id.
const charAmountNum = document.getElementById('charAmountNum')
const charAmountRange = document.getElementById('charAmountRange')
const form = document.getElementById('passwordGeneratorForm')
const password = document.getElementById('password')

var lengthOfPassword = document.getElementById('lengthOfPassword')
var char = "";


//sync  charAmountNum and charAmountRange
charAmountNum.addEventListener('input', syncCharAmount)
charAmountRange.addEventListener('input', syncCharAmount)
function syncCharAmount(e) {
    const value = e.target.value
    charAmountNum.value = value
    charAmountRange.value = value

    value = lengthOfPassword
    return value;
  }

// password values
const values = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXWZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#4567890-=<>?:{}|[]\~`"
}
  //     b. Lowercase, upercase, numbers, special characters
  const getValues = [
        function upperCase() {
          return values.upperCase[Math.floor(Math.random() * values.upperCase.length)]
      }, 
        function loweCase() {
          return values.lowerCase[Math.floor(Math.random() * values.lowerCase.length)]
      },
        function number() {
          return values.number[Math.floor(Math.random() * values.number.length)]
      }, 
        function symbols() {
          return values.symbols[Math.floor(Math.random() * values.symbols.length)]
      }

    ];

 //Random password picking function            
// function chooseRandomNumber(length, char) {
//     for (let i = 0; i < charAmountNum; i++) {
//     var password = char + possibleValues.charAt(Math.floor(Math.random() * Math.floor(possibleValues.length - 1)));

//     } 
//     //Add password to textbox
//     document.getElementById("display").possibleValues = password;

//  }
 
function generatePassword() {

    const chooseUpperCaseElement = document.getElementById('chooseUpperCase').checked
    const chooseLowerCaseElement = document.getElementById('chooseUpperCase').checked
    const chooseNumbersElement = document.getElementById('chooseNumbers').checked
    const chooseSymbolsElement = document.getElementById('chooseSymbols').checked
    if(chooseUpperCaseElement + chooseLowerCaseElement + chooseNumbersElement + chooseSymbolsElement === 0){
        alert('Please select length and one of the boxes below.');
        return;
    }
    var passTextBox = document.querySelector("#password");
    const length = document.getElementById('length')
    char = "";

    while (syncCharAmount.value > char.length) {
        let addKey = getpass[Math.floor(Math.random() * getpass.length)]
        let boxChecked = document.getElementById(addKey.name).checked;
        if(boxChecked) {
            password += addKey()
        }
    }
        
    }
    showPassword.innerHTML = password;
// Add event listener to generate button


            
function showPassword(newPassWord) {

    
    passTextBox.value = newPassWord;

    if(password) {
        return;
    }

}
generateBtn.addEventListener("click", showPassword);



        //  console.log("Yess! You are clicking me!")
        // let charCodes = Lowercase_char_codes
        // if(includeUppercase) charCodes = charCodes.concat(Uppercase_char_codes)
        // if(includeSymbols) charCodes = charCodes.concat(Symbol_char_codes)
        // if(includeNumbers) charCodes = charCodes.concat(Number_char_codes)
        // const passwordCharacter = []
        // for (let i = 0; i < characterAmount; i++) {
        //     const character = charCodes[Math.floor(Math.random() * charCodes.length)]
        //     passwordCharacter.push(String.fromCharCode(character))






    // 1. Prompted the user for the password criteria
    //     a. Password length 8 < 128
  

    // 2. Validate the input
    // 3. Generate password based on criteria.Generate


    // 4. Display password to the page.







  