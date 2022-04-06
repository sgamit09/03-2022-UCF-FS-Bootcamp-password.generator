// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
masterArray = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var promptBegin = window.confirm('Generate new Password?');
  var promptChar = prompt('# of Characters for new Password. At least 8, less than 128');
  var passwordLength = parseInt(promptChar)

  var promptUpCase = window.confirm("Password to contain Uppercase Letters?");
  if (promptUpCase) {
    masterArray = uppercase;
  } else
    masterArray = masterArray;

  var promptLowCase = window.confirm("Password to contain Lowercase Letters?");
  if (promptLowCase) {
    masterArray = masterArray.concat(lowercase);
  } else
    masterArray = masterArray;

  var promptNum = window.confirm("Password to contain numbers?");
  if (promptNum) {
    masterArray = masterArray.concat(numberChars);
  } else
    masterArray = masterArray;

  var promptspecial = window.confirm("Password to contain special characters (!,@,#...?)");
  if (promptspecial) {
    masterArray = masterArray.concat(specialChars);
  } else
    masterArray = masterArray;

  console.log(masterArray);
  // arrays are combined into one array called masterArray
  passwordChar = toString(masterArray);
  // masterArray is then changed into a string
  let password = "" //define empty string as a container
  for (let i = 0; i < passwordLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)] //add generated character to the string
  }
  return password;

}