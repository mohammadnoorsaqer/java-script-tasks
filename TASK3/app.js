//1-Check if a variable named "age" is greater than 18 and display a message "You are an adult" if it is. 
let age=27
if(age>18)
{
    console.log(
        'You Are an Adult '
    )
}

//2-Check if a variable named "score" is less than or equal to 50 and display a message "You failed the test" if it is. 
let score=45
if(score<=50)
{
    console.log('you failed the test')
}
//3- Check if a variable named "name" is equal to "John" and display a message "Hello, John" if it is
let NAME='John'
if(NAME)
{
    console.log('Hello, John')
}
//4-Check if a variable named "day" is not equal to "Saturday" and "Sunday" and display a message "It's a weekday" if it is. 
let day='Monday'
if(day!=="Saturday"&&"Sunday")
{
    console.log("it's a weekday")
}
// 5-Check if a variable named "num" is divisible by 2 and display a message "The number is even" if it is.
let num=4
if(num%2==0)
{
    console.log('The number is even')
}
//6- Check if a variable named "char" is a letter and display a message "It's a letter" if it is. 
let char='a'
if(char==='j')
{
    console.log('its a letter')
}

//7-Check if a variable named "list" is an array and display a message "It's an array" if it is. 
let list = [1, 2, 3];
if (Array.isArray(list)) {
    console.log('its an array');
}
//8-Check if a variable named "x" is a positive number and display a message "x is a positive number"
let x=5
if(x>0)
{
    console.log('its a positive number')
}
//9-Check if a variable named "y" is a negative number and display a message "y is a negative number" if it is. 
let y=-5
if(y<0)
{
    console.log('its a negative number')
}
//10-Check if a variable named "z" is a multiple of 3 and display a message "z is a multiple of 3" if it is.
let z = 9; // You can change this value to test with different numbers

if (z % 3 === 0) {
    console.log(`${z} is a multiple of 3`);
} else {
    console.log(`${z} is not a multiple of 3`);
}
//11- Check if a variable named "gpa" is greater than or equal to 3.0 and display a message "Congratulations, you have a good GPA!" if it is
let gpa=3.5
if(gpa>=3.0)
{
    console.log("Congratulations, you have a good GPA!")
}
//12- Check if a variable named "password" is at least 8 characters long and display a message "Your password is strong" if it is. 
let password = "mypassword123"
if(password.length==8)
{
    console.log("Your password is strong")
}
//3-Check if a variable named "age" is between 18 and 65 (inclusive) and display a message "You are of working age" if it is. 
let h = 25; 

if (h >= 18 && h <= 65) {
    console.log("You are of working age");
} else {
    console.log("You are not of working age");
}
//14

let color = "green";

if (color === "red" || color === "green" || color === "blue") {
    console.log("color is a primary color");
} else {
    console.log("color is not a primary color");
}
//15
function isValidNumber(x) {
    if (isNaN(x)) {
        console.log(`${x} is not a valid number`);
    } else {
        console.log(`${x} is a valid number`);
    }
}

isValidNumber('hello');