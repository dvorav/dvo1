let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacters = "!@#$%^&*()_+{}|:<>?";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


//Split initial variables to an array. 
let uppercaseArray = letters.split("");
let lowercaseArray = letters.toLowerCase().split("");
let specCharArray = specialCharacters.split("");

//Intializes the generatepass function when clicked
document.getElementById("generate").onclick = function () {
  generatePass();
};


function generatePass() {
    //Empty variables that will contain the results of the password when asked the questions
  let allChars = [];
  let resultPass = "";

  //Prompt for the length of the password
  let TotalLength = prompt(
    "How many character would you like your password to be? Choose a number between 8 and 126"
  );
// Total length should be between 8 - 126 characters
  if (TotalLength <= 7 || TotalLength >= 127) {
      //If false, it will start over
    alert("Please choose a number between 8 and 126.");
    generatePass();

    // True or false questions that will prompt.
  } else {
    if (confirm("Would you like to have uppercase letters?")) {
      Array.prototype.push.apply(allChars, uppercaseArray);
    }

    if (confirm("Would you like to have lowercase letters?")) {
      Array.prototype.push.apply(allChars, lowercaseArray);
    }

    if (confirm("Would you like to have numbers?")) {
      Array.prototype.push.apply(allChars, numbers);
    }

    if (confirm("Would you like to have special characters?")) {
      Array.prototype.push.apply(allChars, specCharArray);
    }

    //If all false, then it'll start over
    if (allChars.length === 0) {
      alert(
        "You need to at least select one type of character. Please start over"
      );
      generatePass();

    //Will do a for loop creating a password.
    } else {
      for (let i = 0; i < TotalLength; i++) {
        let random = Math.floor(Math.random() * allChars.length);
        resultPass += allChars[random];
      }
    }
  }
  //Displays results onto HTML Page
  document.getElementById("password").innerHTML = resultPass;

}
