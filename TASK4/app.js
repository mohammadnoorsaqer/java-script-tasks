const x = [1, 2, 3, 4, 5];

x.forEach(function(number) {
    console.log(number);
});
const y = [1, 2, 3, 4, 5];

const squaredNumbers = y.map(number => number * number);

console.log(squaredNumbers);
const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = z.filter(number => number % 2 === 0);
console.log(evenNumbers);
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);
var strings = ["banana", "apple", "orange", "kiwi"];

strings.sort();

console.log(strings);
var array = [1, 2, 3, 4, 5];

array.reverse();

console.log(array);
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];

var combinedArray = array1.concat(array2);

console.log(combinedArray);
var array = [1, 2, 3, 4, 5];

var slicedArray = array.slice(1, 4);

console.log(slicedArray);
var array = [1, 2, 3, 4, 5];

array.splice(2, 1, 6, 7);

console.log(array);
var array = [10, 20, 30, 40, 50];

var index = array.indexOf(30);

console.log(index);
var array = ["Hello", "world", "this", "is", "JavaScript"];

var string = array.join(" ");

console.log(string);    
var string = "Hello world this is JavaScript";

var array = string.split(" ");

console.log(array);
var array = [1, 2, 3, 4, 5];

var length = array.length;

console.log(length);
var array = [1, 2, 3, 4, 5];

for (var element of array) {
    console.log(element);
}
var array = [10, 20, 30, 40, 50];

for (var index in array) {
    console.log(index);
}
var array = [1, 2, 3];
var notArray = { key: "value" };

console.log(Array.isArray(array));
console.log(Array.isArray(notArray));
var array = Array.of(1, 2, 3, 4, 5);

console.log(array);
var myArray = new Array(5).fill(0);

console.log(myArray);
var myArray = [1, 2, 3, 4, 5];

myArray.copyWithin(0, 3);

console.log(myArray);
