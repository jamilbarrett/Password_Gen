// Assignment Code
// Created assignment operators based on the ReadMe's criteria of lower case, upper case, numbers and special characters that are required.



// Provide lower & upper case letters, numbers, and special characters for the password content
// Get the user info
// Create a password string based on the users provided information
// After the user goes through all the prompts, they will hit the generate button and their password will be created.



var generateBtn = document.querySelector("#generate");




var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];



// created a function that will capture the users info via 'confirm' which will produce a boolean value.
// created a do-while loop to force the user to follow the guideline of the paramaters set. This will continuosly loop until the user enters a corrects entry. 
function generatePassword() {
  function capturedUserInfo() {
    var includeLowerCase = confirm('Click OK to include Lower Case Letters');
    var includeUpperCase = confirm('Click OK to include Upper Case Letters');
    var includeNumbers = confirm('Click OK to include Numbers');
    var includeSpecialCharacters = confirm('Click OK to include Special Characters');
    var desiredAmount
    do {
      desiredAmount = +prompt(('Please provide the desired length of your password (between 8 and 128)'));
    } while (desiredAmount < 8 || desiredAmount > 128);


    return [includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters, desiredAmount];

  }



  // This porttion below is where i being to extrapalate the users provide answers.
  var caughtUserinfo = capturedUserInfo();

  var wantsLowerCase = caughtUserinfo[0];
  var wantsUpperCase = caughtUserinfo[1];
  var wantsNumbers = caughtUserinfo[2];
  var watntsSpecialCharacters = caughtUserinfo[3]
  var desiredAmount = caughtUserinfo[4];
  var passcode = '';
  var combinedChars = [];


  // This section ties back into the function captureduserinfo. the password will only include letters, numbers and special characters if the users selcted okay which is a truthy.
  if (wantsLowerCase) {
    combinedChars = combinedChars.concat(lowerCase);
  }

  if (wantsUpperCase) {
    combinedChars = combinedChars.concat(upperCase);
  }
  if (wantsNumbers) {
    combinedChars = combinedChars.concat(numbers);
  }

  if (watntsSpecialCharacters) {
    combinedChars = combinedChars.concat(specialCharacters);

  }

  for (var count = 0; count < desiredAmount; count++) {
    var randomNum = Math.random();
    var randomPick = Math.floor((randomNum * combinedChars.length));
    var randomselection = combinedChars[randomPick];
    passcode += randomselection

  }

  return passcode;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);




