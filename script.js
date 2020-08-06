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


function generatePassword() {
  var lcArray = "abcdefghijklmnopqrstuvwxyz"; //lc = lower case array
  var ucArray = lcArray.toUpperCase(); //uc = upper case array
  var spChar = "!@#$%^&*()_-+?<>{}[]]|\\:;~`";
  var num = "123456789";

  
  var cLength 
  for(lengthChk = false; lengthChk === false;) //loop if parametrs are invalid.
  {
      cLength = parseInt(prompt("How many charcters do you want in your password? Please chose between 8 and 128."));   //int
      lengthChk = isNumber(cLength); //test cLength is correct to move on.
      if(lengthChk === false) ("invalid selection try again"); 
  }
  
  
  var alpha = confirm("Do you want alpha characters generated?");     //bool
  if(alpha){                                                          //if user doesn't want alpha we don't need to ask for upper or lower case numbers.
    var lowerCase = confirm("Do you want lower case?");               //bool
    var upperCase = confirm("Do you want upper case?");               //bool
  }else{
    lowerCase = false;
    upperCase = false;
  }
  var numeric = confirm("Do you want numerical characters?");         //bool
  var specialChr = confirm("Do you want special characters?")         //bool
  
   if((alpha && numeric && special) === false)
   {
      alert("Your selections dosen't allow for a valid number randomization, re-run script.");
      return; 
   }

  console.log(cLength);
  console.log(alpha);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChr);
   
  //**make sure one of the character types are selected */
  //generate the password
  //return value.
  
 
  var text = prompt("enter text");
  console.log(text);
  return text;

}


function isNumber(testNum)
{
  if(typeof testNum === 'number' && testNum >= 8 && testNum <= 128 )
  {
    return true;
  } else{ return false;}
}


function isBool(testBool)
{
  if(typeof(testBool)=== "boolean")
  return true;
}

function actualNumGen(/*pass obj that holds all the values*/)
{
  
}