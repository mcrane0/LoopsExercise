// Loops Exercise
/*
    1. Use a For Loop to count from 1 to 7 and have each number display in the console/terminal (You will need a 
        console log for this)
    2. Use a For Loop to count from 5 to 25 by 4 (Ex: 5, 9, 13, etc.) and have each number display in the 
        console/terminal (You will need a console log for this)
    3a. Create a const variable named wizards and set the value of the variable to the following array items 
        "Harry Potter", "Hermione Granger", and "Ron Weasley"
    3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)
    4a. Create a let variable called harryPotterMovies and set the value to 0 (That's a zero not O).
    4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until 
        the harryPotterMovies variable has a value of 8.
    4c. After the while loop in your file create a console log to display the value of the harryPotterMovies variable 
        in the terminal (The value should be 8)
*/

for (i = 1; i < 8; i++){
    console.log(i);
}

console.log('====================================');

for (e = 5; e < 26; e += 4){
    console.log(e);
}

console.log('====================================');

const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
for (j of wizards){
    console.log(j);
}

console.log('====================================');

let harryPotterMovies = 0;

while (harryPotterMovies < 8){
    harryPotterMovies++;
}
console.log(harryPotterMovies);

console.log('====================================');


// bonus
/*
    5a. Create a const variable named hogwartsHouses and set the value of the variable to the following array 
        items "Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin".
    5b. Using nested For Of Loops, have each house name displayed in the console/terminal one letter at a time 
        (You will need a console log for this).
    6a. Create a const variable named quote and set the value of the variable to the following array items 
        "Yer", "A", "Wizard", "Harry".
    6b. Using a loop (You can decide which one you want to use) and the QUOTE array have the message 
        "Yer A Wizard Harry" display on ONE line in the console/terminal (NOTE: Must have spaces between the words 
        when it is displayed. Also, You will need a console log for this)
        (HINT: You will need to create another variable)
    7. Create a For Loop that displays numbers 1 to 25 (AKA Counts from 1 to 25) in the terminal/console when the 
        file is run. However, for numbers that are multiples of 3 (3, 6, 9, etc.) have the string value of "Expecto" 
        display instead of the number. Also, for numbers that are multiples of 5 (5, 10, 15, etc.) have the string 
        value of "Patronum" display instead of the number. Finally, for numbers that are multiples of 3 & 5 have the 
        string value of "Expecto Patronum" display instead of the number.
*/

const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

for (house of hogwartsHouses){
    for (char of house){
        console.log(char);
    }
}

console.log('====================================');

const quote = ["Yer", "A", "Wizard", "Harry"];
let output = "";
for (k of quote){
    output += (k + " ");
}
console.log(output);

console.log('====================================');

for (l = 1; l < 26; l++){
    if ( ((l % 3) == 0) && ((l % 5) == 0) ){
        console.log("Expecto Patronum");
    }
    else if ((l % 3) == 0){
        console.log("Expecto");
    }
    else if ((l % 5) == 0){
        console.log("Patronum");
    }
    else {
        console.log(l);
    }
}
