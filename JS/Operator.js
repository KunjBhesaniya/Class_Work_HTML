document.write("<h4>Arthmetic Opretor</h4>");
// Arthmetic Operator
var x = 10;
var y = 20;

// Addition Operator
document.write("X + Y : " + (x + y));
document.write("<br>");
document.write("X - Y : " + (x - y));
document.write("<br>");
document.write("X * Y : " + (x * y));
document.write("<br>");
document.write("X / Y : " + (x / y));
document.write("<br>");
document.write("X % Y : " + (x % y));
document.write("<br>");
document.write("X ** Y : " + (x ** y));
document.write("<br>");

document.write("<br>");

document.write("<h4>Increment Opretor</h4>");
// Increment (++)
document.write("Pre Increment : " + (++x));
document.write("<br>");
document.write(x);
document.write("<br>");
document.write("Post Increment : " + (x++));
document.write("<br>");
document.write(x);

document.write("<br>");

document.write("<h4>Decrement Opretor</h4>");
// Decrement (--)
document.write("Pre Decrement : " + (--x));
document.write("<br>");
document.write(x);
document.write("<br>");
document.write("Post Decrement : " + (x--));
document.write("<br>");
document.write(x);

document.write("<br>");

document.write("<h4>Assignment Opretor</h4>");
// Assignment Operator
var a = 10;
a += 5;
document.write("a = 10");
document.write("<br>");
document.write("a += 5 : " + a);

document.write("<br>");

document.write("<h4>Comparison Opretor</h4>");
// Comparison Operator
var b = 1;
document.write("b > 0 : " + (b>0));
document.write("<br>");
document.write("b >= 0 : " + (b>=0));
document.write("<br>");
document.write("b < 0 : " + (b<0));
document.write("<br>");
document.write("b <= 0 : " + (b<=0));

document.write("<br>");

document.write("<h4>Equality Opretor</h4>");

// Equality Operator
document.write("b === 1 : " + (b === 1)); // Strict Equality [Type + Value]
document.write("<br>");
document.write("b !== 1 : " + (b !== 1));
document.write("<br>");
document.write("b == 1 : " + (b == 1)); // Lose Equality [Value]

document.write("<br>");

document.write("<h4>Ternary Opretor</h4>");

// Ternary Operator [Conditional]
var point = 110;
var type = point > 100 ? 'Gold' : 'Silver';
document.write("type = point > 100 ? 'Gold' : 'Silver' : " + type);

document.write("<br>");

document.write("<h4>Logical Opretor</h4>");

// Logical Operator

// Logical AND [&&]
// Return TRUE if Both Operands are TRUE
document.write("AND [&&] (Both must be TRUE) : " + (true && true));

document.write("<br>");

// Logical OR [||]
// Return TRUE if one of the Operand are TRUE
document.write("OR [||] (One must be TRUE) : " + (true || false));

document.write("<br>");

// Logical NOT [!]
document.write("NOT [!] (Opposite) : " + (false != false));

document.write("<br>");

document.write("<h4>Bitwise Operator</h4>");

// Bitwise OR [|]
document.write("Bitwise OR[|] 1 | 2 : " + (1 | 2));

document.write("<br>");

//Bitwise AND
document.write("Bitwise AND[&] 1 & 2 : " + (1 & 2));

document.write("<br>");

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
var myPermission = 0;

myPermission = myPermission | readPermission | writePermission;
document.write(myPermission);

document.write("<br>");

var message = (myPermission & executePermission) ? 'Yes' : 'No';
document.write(message);

document.write("<br>");
document.write("<br>");

// Operator Precedence
var d = (2 + 3) * 4;
var c = 2 + 3 * 4;
document.write("(2 + 3) * 4 : " + d);
document.write("<br>");
document.write("2 + 3 * 4 : " + c);


