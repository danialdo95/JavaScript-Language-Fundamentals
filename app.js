// Log to console

console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'hello';
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1, b:2});
console.table({a:1, b:2})
console.error('This is some error');
console.clear();
console.warn('this is a warning');
console.time('time');
console.timeEnd('time');


//var, let, const

var name = 'john doe';
console.log(name);

name = 'Steve Smith'
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);

// letters, numbers, _, $
//cannot start with a number

//Multiword Variable 
var firstName = 'John';  // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom';   // Pascal case
var firstname;

//LET
let name = 'john doe';
console.log(name);

name = 'Steve Smith'
console.log(name);

//CONST 
const name = 'john doe';
console.log(name);

// name = 'Steve Smith'

const person = {
    name:'John',
    age: 30
}

person.name = 'Sara';

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);


console.log(numbers);

//Primitive 
//String 
const name = "John Doe";
//number
const number = 45;
//boolean 
const haskids = true
//Null
const car = null;
//Undefined
let test;
// Symbol
const sym = Symbol();

//REFERENCE TYPES - Objects
//Array
const hobbies = ['movies', 'music'];
//object literal
const address = {
    city: 'Boston',
    state: 'MA' 
}

const today = new Date();
console.log(today);

console.log(typeof today);


let val;

//number to string
val = String(5);
val = String(4+4)
//Bool to string
val = String(true);
//Date to String
val = String(new Date());
//Array to String
val = String([1,2,3,4])

//toString()
val = (5).toString();
val = (true).toString();

//String to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.30');

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const num1 = 100;
const num2 =60;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(3);
val = Math.pow(8 ,2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1);
console.log(val);

const firstName= 'William';
const lastName = 'Johnson'
const age = 36;
const str = 'Hello there, my name is Brad';
const tags = 'web design, web development,programming';

let val;

val = firstName + lastName;
//concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am' + age;

// Escaping
val = 'that\'s awesome, I can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charat
val =  firstName.charAt(0);

//Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0,4);

//slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad', 'Jack');

//includes()
val = str.includes('Hello')



console.log(val);

const name ='John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami'; 


// Without template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li> Job: ' + job + '</li><li>City: ' 
        + city + '</li></ul?>';

html = '<ul>'+
            '<li>Name: ' + name + '</li>' + 
            '<li>Age: ' + age + '</li>' +
            '<li> Job: ' + job + '</li>' + 
            '<li>City: ' + city + '</li>' + 
        '</ul>';

function hello(){
    return 'hello';
}
         
//with template strings (es6);
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}<li>
    </ul>
`;

document.body.innerHTML = html;

// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,43,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b:1}, new Date()];

let val;

//Get array length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value 
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(36);
//Mutating Array
//push on to end 
numbers.push(250);
//push on to front 
numbers.unshift(120);
//take of from the end
numbers.pop();
//take numbers from the front 
numbers.shift();
//splice values 
numbers.splice(1,3);
//Reverse values
numbers.reverse();
//Concatenate Array
val = numbers.concat(numbers2);

//sorting arrays 
val = fruit.sort();
val = numbers.sort();

//use the "compare function"
val = numbers.sort(function(x,y){
    return x - y;
})

//Reverse sort
val = numbers.sort(function(x,y){
    return y - x;
})

//Find
function under50(num){
   return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);

const person = {
    firstname: 'Steve',
    lastname: 'Smith', 
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address:{
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}

let val;

val = person;
val = person.firstname;
val = person['firstname'];
val = person.lastname;
val = person.age;
val = person.email;
val = person.hobbies[1];        
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age:30},
    {name: 'Mike', age:23},
    {name: 'Nancy', age:40}
];

for(let i=0; i< people.length; i++)
{
    console.log(people[i].name);
}

let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1991');
birthday = new Date('9/10/1981');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
const id = 100;

//Equal to
if (id == 100){
    console.log('Correct');
}
else{
    console.log('Incorrect')
}

//Not Equal
if (id != 100){
    console.log('Correct');
}
else{
    console.log('Incorrect')
}

//Equal to value and type
if (id === 100){
    console.log('Correct');
}
else{
    console.log('Incorrect')
}
//Equal to value and type
if (id !== 100){
    console.log('Correct');
}
else{
    console.log('Incorrect')
}

//Test if undefined
if (typeof id != 'undefined'){
    console.log(`The id is ${id}`)
}
else {
    console.log(`No ID`)
}

//Greater or less than 
if (id >= 100){
    console.log('CORRECT');
}
else {
    console.log('INCORRECT');
}

//if else 

const color = 'yellow';

if (color === 'red'){
    console.log('Color is red');
}
else if (color === 'blue'){
    console.log('Color is blue');
}
else{
    console.log('Color is not red or blue');
}

//Logical Operator 

const name = 'Steve';
const age = 20;


//AND &&
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
}
else if (age >= 13 && age <= 19 ){
    console.log(`${name} is a teenager`);
}
else{
    console.log(`${name} is a adult`);
}

//OR ||
if (age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}
else{
    console.log(`${name} is registered run in a race`);
}

//Ternary Operator
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// Without Braces
if (id === 10)
    console.log('correct')
else
    console.log('Incorrect');

const color = 'blue';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
    
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`)


// Function Declaration 

function greet(firstName = 'John', lastName = 'Doe'){
    //if(typeof firstName === 'undefined'){firstName = 'John'}
    //console.log('Hello');
    return 'hello ' + firstName + ' ' + lastName;
} 

console.log(greet('steve'));

//Function Expression

const square = function(x = 3){
    return x*x;
};

console.log(square());


//Immediately Invokable function expression

(function(name){
    console.log('Hello ' + name);
})('Brad');

//Property Method
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo ...')
}

todo.add();
todo.edit(22);

todo.delete()

//For Loop

for (let i = 0; i < 10; i++){
    //console.log('Number ' + Number(i+1));
    if(i === 2){
        console.log('2 is my favorite number');
        continue;
    }

    if(i === 5){
        console.log('Stop the loop');
        break;
    }

    console.log('Number ' + i);
}

//While loop

let i = 0;

while(i < 10){
    
    console.log('Number ' + i)
    i++;

}

//Do While
let i =0;
do {
    console.log('Number ' + i);
    i++
}
while(i < 10);

//Loop Through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i ++){
    console.log(cars[i]);
}

//For each
cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array)
})

MAP
const users = [
    {id: 1, name:'John'},
    {id: 2, name:'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
    return user.id
})

console.log(ids);

const user = {
    firstName:' John',
    lastName: 'Doe',
    adge: 40
}

for (let x in user){
    console.log(`${x} : ${user[x]}`);
}

//Window methods / Objects / Properties

console.log(123);

alert
alert('Hello World');

Prompt
const input = prompt();
alert(input)

Confirm
if (confirm('Are you sure')){
    console.log('yes');
}
else{
    console.log('no');
}

let val;

//Outer Height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner Height and width
val = window.innerHeight;
val = window.innerWidth;

//scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object 
val  = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

Redirect
window.location.href = 'http://google.com';

Reload
window.location.reload();

//History Object 

window.history.go(-2);

val = window.history.length;

//Navigator Object

val =  window.navigator;
val =  window.navigator.appName;
val =  window.navigator.appVersion;
val =  window.navigator.userAgent;
val =  window.navigator.platform;
val =  window.navigator.vendor;
val =  window.navigator.language;

console.log(val);


//Global Scope 
var a = 1;
let b = 2;
const c = 3;

function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope: ', a,b,c);
}

test();

if(true){
    // Block Scope;
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c)

}

for(let a = 0; a < 10; a++){
    console.log(`Loop ${a}`)
}

console.log('Global Scope', a, b, c)
