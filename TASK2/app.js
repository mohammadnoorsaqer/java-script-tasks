//1.Create a function that will display the smallest value in the array. 
findSmallest=()=>
{
   let arr=[30, 45, 60, 7]
   let arr2=Math.min(...arr) // this is called spread operator its spread the array
   console.log(arr2)
}
findSmallest()
//2. Function that will return your string in Alphabetical order 
AlphabeticalOrder=(word)=>{
    return word.split("").sort().join(" ")
}

let randomWord = "hello";
console.log(AlphabeticalOrder(randomWord))
//3. In mathematics, the factorial of a non-negative integer n, denoted by n! is the product of all positive integers less than or equal to n. In simple terms, the Factorial of 8 is solved like this: 
 factorial=(n)=>
 {
if(n==0)
    return 1
else 
{
   return  n * factorial(n-1)
}
}
 console.log(factorial(5))
 //4. A Write a function that lets you know if a number is Even or Odd . 
 oddOrEven=(z)=>
 {
    if(z%2==0)
    {
        console.log('this is an even number')
    }
    else if(z%2==1)
    {
        console.log('this is an odd number')
    }
 }
oddOrEven(9)
//5. Remove all Odd number(s) in an array and return a new array that contains Even numbers only. 
remove_odd_numbers=()=>
{
    let arr1=[1, 2, 3, 4, 5, 6,7,8,9]
    let even_numbers=arr1.filter((even)=>{return even%2==0})
    console.log(even_numbers)
}
remove_odd_numbers()
//6. Create a function that takes in an array as an argument, checks the data type of each element, and removes any elements that are strings. The function should return the modified array. 
numbersOnly=(arr)=>
{
return arr.filter(element=>typeof element!=='string')
      
}
console.log(numbersOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']))
//7. Return the sum of a number going back to it's root. In other words, the function will work like this:
addUp=(j)=>
{
    if(j==0)
        return 0
    else 
    {
       return  j + addUp(j-1)
    }
}
console.log(addUp(8))
//8. Create a function that will accept an array and do the following: 
minMaxLengthAverage=(arr)=>
{
    let arr2=Math.min(...arr) // this is called spread operator its spread the array
    console.log(arr2) // this is to find the min
    let arr3=Math.max(...arr) // this is called spread operator its spread the array
    console.log(arr3) // this is to find the Max
    let arr4 = arr.reduce((prev, next) => prev + next) /arr.length;
    console.log(arr4)
}
minMaxLengthAverage([30, 45, 60, 7])
//9. Convert the given number to a Roman Numeral
romanNumbers=()=>
{

}
//10. Return how many words was given 
countWords=(word)=>
{
return word.split(' ').length

}
console.log(countWords('hello from CodingAcademy!'))
//11.Create function to Multiply all elements in an array by it's length 
function MultiplyByLength() {
    let arr = [4, 2, 5];
    let multiplied = arr.map((element) => {
        return element * arr.length;
    })
    return multiplied; 
}

console.log(MultiplyByLength()); 
//12. Create a function that will check if str1 ends with the characters in str2 
function checkEnding(str1,str2)
{
   return str1.endsWith(str2)
}
console.log(checkEnding("CodingSchool", "OO"))
//13. Create a function that will repeat each string character two times 
function doubleChar(str) {
    return str.split('').map(char => char.repeat(2)).join('');
}

console.log(doubleChar('Coding'));
//15.Create function to Return the absolute sum of all the array elements 
function sum(arr) {
    return arr.reduce((prev, next) => Math.abs(prev) + Math.abs(next), 0);
}

console.log(sum([-1, -3, -5, -4, -10, 0])); 
//14. Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for. 
function findIndex(arr, element) {
    return arr.indexOf(element)+ 1;
}

console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); 