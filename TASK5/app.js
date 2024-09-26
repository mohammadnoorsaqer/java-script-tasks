// 1
for(let i =1;i<=10;i++)
{
    console.log(i)
}
//2
let x=1
while(x<=10)
{
    console.log(x)
    x++
}
//3 
let arr=[1,2,3,4,5]
for(let i =0;i<arr.length;i++)
{
    console.log(arr[i])
}
//4
for (let i =0;i<=10;i+=2)
{
    console.log(i)
}
//5
let sum = 0;

for (let number = 1; number <= 10; number++) {
    sum += number;
}
console.log("The sum of numbers from 1 to 10 is:", sum);
//6
const numbers = [3, 5, 1, 8, 2];
let largestNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}


console.log("The largest number is:", largestNumber);
//7
let numbers1 = [3, 5, 1, 8, 2];
let smallestnumber = numbers1[0];
for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] < smallestnumber) {
        smallestnumber = numbers1[i];
    }
}


console.log("The smallest number is:", smallestnumber);
const avg = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < avg.length; i++) {
    total += avg[i];
}

const average = total / avg.length;

console.log('Average:', average);
//8
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const p = 5;
console.log(`The factorial of ${p} is ${factorial(p)}.`);
//9
function fibonacci(upTo) {
    let a = 0;
    let b = 1;
    
    console.log("Fibonacci sequence up to " + upTo + ":");
    
    for (let i = 0; a <= upTo; i++) {
        console.log(a);
        const next = a + b; 
        a = b; 
        b = next; 
    }
}

const number = 21; 
fibonacci(number);
//
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function printPrimes(upTo) {
    for (let num = 2; num <= upTo; num++) {
        if (isPrime(num)) {
            console.log(num); 
        }
    }
}

// Example usage
const maxNumber = 30;
console.log(`Prime numbers up to ${maxNumber}:`);
printPrimes(maxNumber);
