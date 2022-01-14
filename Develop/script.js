// Assignment code here
function generatePassword() {
console.log("Good job champ, the button works!!!!!")
return "Password is cooking!"
      // Length //
  let length = prompt('what is the length of password? 8-128 Characters available');

      //prompt('what characters do you want in the password?')//
  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert('invalid');
  } else {
        // Uppercase //
    var addUppercase = window.confirm("Do you want uppercase? Yes or No?")
        // Lowercase //
    var addLowercase = window.confirm("Do you want lowercase? Yes or No?")
        // Numbers //
    var addNumbers = window.confirm("Do you want numbers? Yes or No?")
    let numbers = prompt("how many? 1-5.")
    if (parseInt(numbers) < 1 || parseInt(numbers) > 5) {
      alert('invalid');
    }
        // Special Characters //
    var addSpecialCharacter = window.confirm("Do you want a special character? Yes or No?")

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
generateBtn.addEventListener("click", writePassword)