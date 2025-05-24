// write the program to print the movie rating in the based on the  movie namae and rating based 

const prompt = require('prompt-sync')();

let movie = prompt("Enter the movie name: ");
let rating = Number(prompt("Enter the rating of the movie (0.0 to 5.0): "));

console.log('Movie: ' + movie);
console.log('Rating: ' + rating);

if (rating >= 0.0 && rating <= 2.0) {
    console.log(`${movie} is a flop movie.`);
} else if (rating > 2.0 && rating <= 3.4) {
    console.log(`${movie} is a semi-hit movie.`);
} else if (rating > 3.4 && rating <= 4.5) {
    console.log(`${movie} is a hit movie.`);
} else if (rating > 4.5 && rating <= 5.0) {
    console.log(`${movie} is a super hit movie.`);
} else {
    console.log("Invalid rating entered. 😔");
}
