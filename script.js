var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
var lowerCaseCharacters = ['a','b','c','d','e','f','g','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var spcCharacters = ['~','!','@','#','$','%','^','&','*','(',')','_','+','{','}','|',':','\"','<','>','?','-','=','[',']','\\',';','\'',',','.','/'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){  
  var password = "";
  var length;
  while (true) {
    length = prompt("Please choose a length of at least 8 characters and no more than 128 characters");
    length = Number.parseInt(length);
    if (length < 8 || length > 128) {
       alert("Enter a valid number");
    } else {
      break;
    }
  } 

  var isLowerCase;
  while (true) {
    isLowerCase = prompt("Do you want to add lowerCase character? Please enter Yes/No.");
    if (isLowerCase != "yes" && isLowerCase != "no") {
      alert("Enter only Yes/No");
    }else {
      break;
    }
  }

  var isUpperCase;
  while (true) {
    isUpperCase = prompt("Do you want to add upperCase character? Please enter Yes/No.");
    if (isUpperCase != "yes" && isUpperCase != "no") {
      alert("Enter only Yes/No");
    }else {
      break;
    }
  }

    var number;
    while (true) {
      number = prompt("Do you want to add numbers? Please enter Yes/No.");
    if (number != "yes" && number != "no"){
      alert("Enter only Yes/No");
    }else {
      break;
    
    }
  }

  var specialCharacter;
  while (true) {
    specialCharacter = prompt("Do you want to add specialcharacters ? Please enter Yes/No.");
    if (specialCharacter != "yes" && specialCharacter != "no"){
      alert("Enter only Yes/No");
    }else {
      break;
    }
  }

  
  var randomIndex;
  for (var i=0; i < length; i++) {
    if (isLowerCase == "yes"){
      var randomIndex = Math.floor(Math.random() * lowerCaseCharacters.length);
      password = password + lowerCaseCharacters[randomIndex];
    }
  
    if (isUpperCase == "yes"){
      var randomIndex = Math.floor(Math.random() * upperCaseCharacters.length);
      password = password + upperCaseCharacters[randomIndex];
    }
    

    if (number == "yes"){
      var randomIndex = Math.floor(Math.random() * numericCharacters.length);
      password = password + numericCharacters[randomIndex];
    }
    

    if (specialCharacter == "yes"){
      var randomIndex = Math.floor(Math.random() * spcCharacters.length);
      password = password + spcCharacters[randomIndex];
    }
    
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
