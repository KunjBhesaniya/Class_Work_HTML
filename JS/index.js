// Variable
document.write("<h3> Variable </h3>");

console.log("Hello World");

var name = "Kunj";
document.write(name);

document.write("<br>");

var firstName = "Kunj";
var lastName = "Bhesaniya";
document.write(firstName +" "+ lastName);

//Constant
document.write("<br>");
document.write("<br>");

document.write("<h3> Constant </h3>");

var intrestRate = 0.3;
intrestRate = 1;
document.write(intrestRate);

document.write("<br>");

//Primitive / Value Type
//String, Number, Bolean, Undefined, Null
var name1 = 'Kunj';
var age = 18;
var isApproved = true;
var personName = undefined;
var selectedColor = null;

//Dynamic Typing
//typeof [varName]
document.write(typeof name1);
document.write("<br>");
document.write(typeof age);
document.write("<br>");
document.write(typeof isApproved);
document.write("<br>");
document.write(typeof personName);
document.write("<br>");
document.write(typeof selectedColor);
document.write("<br>");

//Reference type
//Object, Array, Function
var person = {
    name: 'Kunj',
    age: 18
};

// Dot Notation
person.name = 'Bhesaniya'

// Bracket Notation
person['name'] = 'Kunj';

document.write(person);
console.log(person.name);  

document.write("<br>");

// Array
var selectName = ['A', 'B', 'C'];
document.write(selectName);