
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//functions
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//used to check an integer
function isNumber(testNum) {
  if (typeof testNum === 'number' && testNum >= 8 && testNum <= 128) {
    return true;
  } else { return false; }
}
//used to verify bool
function isBool(testBool) {
  if (typeof (testBool) === "boolean")
    return true;
}

function generatePassword() {
  var lcArray = "abcdefghijklmnopqrstuvwxyz"; //lc = lower case array
  var ucArray = lcArray.toUpperCase(); //uc = upper case array
  var spChar = "!@#$%^&*()_-+?<>~`";
  var num = "123456789";


  var cLength
  for (lengthChk = false; lengthChk === false;) //loop if parametrs are invalid.
  {
    cLength = parseInt(prompt("How many charcters do you want in your password? Please chose between 8 and 128."));   //cLength = character length.
    lengthChk = isNumber(cLength); //test cLength is correct to move on.
    if (lengthChk === false) ("invalid selection try again");
  }


  var alpha = confirm("Do you want alpha characters generated?");     //bool
  if (alpha) {                                                          //if user doesn't want alpha we don't need to ask for upper or lower case numbers.
    var lowerCase = confirm("Do you want lower case?");               //bool
    var upperCase = confirm("Do you want upper case?");               //bool
  } else {
    lowerCase = false;
    upperCase = false;
  }
  var numeric = confirm("Do you want numerical characters?");         //bool
  var specialChr = confirm("Do you want special characters?")         //bool

  if ((alpha && numeric && specialChr) === false) {
    alert("Your selections dosen't allow for a valid number randomization, re-run script.");
    return;
  }

  console.log(cLength);
  console.log(alpha);
  console.log(lowerCase);
  console.log(upperCase);
  console.log(numeric);
  console.log(specialChr);

  debugger;
  var rgnValue = "";   //rgn = random generated value holder
  var rndSeed1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //this is used to eliminate sequential order in the array.
  var rndSeed2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var a, b, c, d, e, f, g,h;
   
  for (var i = 0; i < cLength;) {

    a = genRandomValue(rndSeed1);
    b = genRandomValue(rndSeed2);
    if (lowerCase && (a > b)) {
      rgnValue += genRandomValue(lcArray);
      if (i < cLength) i++;
    }
    c = genRandomValue(rndSeed1);
    d = genRandomValue(rndSeed2);
    if (upperCase && (c > d)) {
      rgnValue += genRandomValue(ucArray);
      if (i < cLength) i++;
    }

    e = genRandomValue(rndSeed1);
    f = genRandomValue(rndSeed2);
    if (numeric && (e > f)) {
      rgnValue += genRandomValue(num);
      if (i < cLength) i++;
    }
    g = genRandomValue(rndSeed1);
    h = genRandomValue(rndSeed2);
    if (specialChr && (g > h)) {
      rgnValue += genRandomValue(spChar);
      if (i < cLength) i++;
    }
  }


  console.log("rgnValue generated    " + rgnValue + " rgnLength " + rgnValue.length);

  return rgnValue;

}

function genRandomValue(aValue) {
  return aValue[Math.floor(Math.random() * aValue.length)];
}




