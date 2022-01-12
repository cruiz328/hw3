// Assignment code here
function generatePassword() {
  let length = prompt('what is the length of password? 8-128 Characters available');
  //prompt('what characters do you want in the password?')//


  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert('invalid');
  } else {
    let uppercase = prompt('Do you want uppercase? Yes or No?');
    
    let lowercase = prompt('Do you want lowercase? Yes or No?');
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
