// Assignment Code
var generateBtn = document.querySelector("#generate");

const charAmountNumber = document.getElementById('charAmountNum')
const charAmountRange = document.getElementById('charAmountRange')
const form = document.getElementById('passwordGeneratorForm')

const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
//Use passwordLetters array  or use array from high to low in for loop not sure what i want to do yet.
const Uppercase_char_codes = arrayFromLowToHigh(65, 90)
const Lowercase_char_codes = arrayFromLowToHigh(97, 122)
const Number_char_codes = arrayFromLowToHigh(48, 57)
const Symbol_char_codes = arrayFromLowToHigh(34, 47).concat(arrayFromLowToHigh())
//Use passwordLetters array  or use array from high to low in for loop not sure what i want to do yet.
const passwordLetters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d',
                        'e','f','g','h','i','j','k','l','m','n','o','p','q','r',
                        's','t','u','v','w','x','y','z','!','@','#','$','%','^','&','*','(',')']

// Assign password a variable to take in type of password

function generatePassword(characterAmount, includeUppercase, 
        includeNumbers, includeSymbols) {

            String.fromCharCode(65)

    return "How long would you like your password to be? choose between 8 up 128 characters";

        }
    console.log("Hey you clicked the button");

function arrayFromLowToHigh(low, high){
    const array = []
for(let i = low; i <= high; i++) {
    array.push(i)
}
return array;
}








    // 1. Prompted the user for the password criteria
    //     a. Password length 8 < 128
    //     b. Lowercase, upercase, numbers, special characters
    // 2. Validate the input
    // 3. Generate password based on criteria.Generate


    // 4. Display password to the page.



    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

charAmountNum.addEventListener('input', syncCharAmount)
charAmountRange.addEventListener('input', syncCharAmount)

form. addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSybolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase,
    includeNumbers, includeSymbols)
})

function syncCharAmount(e) {
    const value = e.target.value
    charAmountNumber.value = value
    charAmountRange.value = value
  }
