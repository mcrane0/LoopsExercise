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


