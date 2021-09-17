
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialCharacters = "!@#$%^&*()_+{}|:<>?"

    let uppercaseArray = letters.split(''); 
    let lowercaseArray = letters.toLowerCase().split('');
    let specCharArray = specialCharacters.split('')
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
 

document.getElementById("generate").onclick = function(){
    generatePass()};

    function generatePass() {
        let allChars = [];
        let resultPass = "";


        let TotalLength = prompt("How many character would you like your password to be? Choose a number between 8 and 126");

        if(TotalLength <= 8 || TotalLength >= 128){
            alert("Please choose a number between 8 and 126.")
            generatePass()
        }
        else (
            alert("hello")
        )
    }