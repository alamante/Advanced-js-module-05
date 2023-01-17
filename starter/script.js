// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions(){

  let length = parseInt(
    prompt("How many characters would you like your password to contain?")
  )

  //alert(length);

  if(isNaN(length) === true){
  alert("Password length must be provided as number");
  return;
  }

  if(length < 10){
    let msg = document.getElementById("less65").innerHTML ="Passowrd must be atleast 10 characters";
   setTimeout(function(){document.getElementById("less65").innerHTML=""}, 3000);
   return;
  }

  if(length > 65){
   let msg = document.getElementById("less65").innerHTML ="Passowrd must be less than 65";
   setTimeout(function(){document.getElementById("less65").innerHTML=""}, 3000);
   return; 
  }

  
  hasupperCasedCharacters = confirm(" Click Ok to confirm including upper case characters");
  haslowerCasedCharacters = confirm(" Click Ok to confirm including lowercase characters");
  hasnumericCharacters= confirm(" Click Ok to confirm including numeric characters");
  hasspecialCharacters = confirm(" Click Ok to confirm including special characters");


  if(haslowerCasedCharacters == false && hasnumericCharacters === false && hasspecialCharacters 
    === false && hasupperCasedCharacters === false) {
      alert("You must select one character type")

    }

    let passwordOptions = {
      length:length,
      haslowerCasedCharacters: haslowerCasedCharacters,
      hasnumericCharacters: hasnumericCharacters,
      hasspecialCharacters: hasspecialCharacters,
      hasupperCasedCharacters: hasupperCasedCharacters

    }

    console.log(passwordOptions)
  
    
  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr) {
  let randonIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randonIndex];

  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions()

  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if(options.hasspecialCharacters){
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  if(options["lowerCasedCharacters"]){
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters))
  }

  if(options["upperCasedCharacters"]){
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters))
  }

  if(options.numericCharacters){
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }
  
  for(let index = 0; index < options.length; index++){
    var generated = getRandom(possibleCharacter);
    result.push(generated);
  }

  //for(let index = 0; index < guaranteedCharacter.length; index++){
   // result[index = guaranteedCharacter[index]]
  //}

  console.log(result)

  return result.join("")

  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);