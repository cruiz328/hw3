// Assignment code here
function generatePassword() {
console.log("Good job champ, the button works!!!!!")
var passwordCriteria = ""
      // Length //
  let length = prompt('what is the length of password? 8-128 Characters available');

      //prompt('what characters do you want in the password?')//
  if (parseInt(length) < 8 || parseInt(length) > 128) {
    alert('invalid');
  } else {
        // Uppercase //
    var addUppercase = window.confirm("Do you want uppercase? Yes or No?")
    console.log(addUppercase)
    if(addUppercase){
      passwordCriteria+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      console.log(passwordCriteria)
    }
        // Lowercase //
    var addLowercase = window.confirm("Do you want lowercase? Yes or No?")
    console.log(addLowercase)
    if(addLowercase){
      passwordCriteria+="abcdefghijklmnopqrstuvwxyz"
      console.log(passwordCriteria)
    }
        // Numbers //
    var addNumbers = window.confirm("Do you want numbers? Yes or No?")
    console.log(addNumbers)
    if(addNumbers){
      passwordCriteria+="0123456789"
      console.log(passwordCriteria)
    }
        // Special Characters //
    var addSpecialCharacter = window.confirm("Do you want a special character? Yes or No?")
    console.log(addSpecialCharacter)
    if(addSpecialCharacter){
      passwordCriteria+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      console.log(passwordCriteria)
    }

    var password = ""
    for ( var i = 0; i < length; i++ ) {
      password += passwordCriteria.charAt(Math.floor(Math.random() * 
 passwordCriteria.length));
      
    }
    return password
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