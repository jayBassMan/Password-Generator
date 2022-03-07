// Assignment Code
//button querySelector
var generateBtn = document.querySelector("#generate");

// Get the element by id.
const charAmountNum = document.getElementById('charAmountNum')
const charAmountRange = document.getElementById('charAmountRange')
const form = document.getElementById('passwordGeneratorForm')
const password = document.getElementById('password')

const lengthOfPassword = document.getElementById('lengthOfPassword')
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
// password values, Lowercase, Uppercase, numbers, special characters
const values = {
    upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    lowerCase: ["abcdefghijklmnopqrstuvwxyz"],
    numbers: ["0123456789"],
    symbols: ["!@#$%^&*()_+{}|[]\:;'<>?,./~'"]
}
    // 2. Validate the input
    // 3. Generate password based on criteria.Generate
function generatePassword() {
    let charset = '' //empty string of all the chars selected
    const chooseUpperCaseElement = document.getElementById('chooseUpperCase').checked
    const chooseLowerCaseElement = document.getElementById('chooseUpperCase').checked
    const chooseNumbersElement = document.getElementById('chooseNumbers').checked
    const chooseSymbolsElement = document.getElementById('chooseSymbols').checked
    if (chooseUpperCase + chooseLowerCase + chooseNumbers + chooseSymbols == 0) {
        alert("Please select legth of password and criteria from boxes below")
        return;
    }
    if (chooseUpperCaseElement) {
        charset = charset + values.upperCase;
    }
    if (chooseLowerCaseElement) {
        charset = charset + values.lowerCase;
    }
    if (chooseNumbersElement) {
        charset = charset + values.numbers;
    }
    if (chooseSymbolsElement) {
        charset = charset + values.symbols;
    }
    charset = charset.split('')//turn string into an array
    // add chars to charset based on user selection
    charPasswd = "";
    //iterate length times getting a random characters 
    for (let i = 0; i < charPasswd.length; i++) {
        var index = Math.floor((Math.random() * charset.length));
        finalResult += charset[index];
    }
    password.values = charPasswd
}
//addEventListener to generate button
// 4. Display password to the page.
generateBtn.addEventListener("click", generatePassword);








  




    






  