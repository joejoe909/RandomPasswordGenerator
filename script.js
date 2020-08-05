// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword()
{
  //Generate your series of prompts here.
  //***Prompt for user criteria */
  //**promp length must be 8 to 128 characters*/
  //**Prompt for character types. */
  //**promp for lower, uppercase, numeric and/or special characters */
  //
  //**Validate input */ 
  //**make sure one of the character types are selected */
  //generate the password
  //return value.
   var text = prompt("enter text");
   console.log(text);
   return text;
}