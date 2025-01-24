// +,-,*,/
//- Modulus
// - Exponentiation
// - Increment
// - Decrement

// AIRTHMETIC OPERATORS
let a=10
let b=2
console.log('a=',a)
console.log('b=',b)
console.log('a+b=',a+b)
console.log('a-b=',a-b)
console.log('a*b=',a*b)
console.log('a/b=',a/b)
//These all above are mathmatecial operators but in programming we have:

// MODULUS
//It means that when some numbers let it be a divided by b then the reminder should come.
//%
console.log('a % b=',a%b)

//EXONENTATION
//It means to the power of some integer
// **
console.log('Square of a =',a**a)

//UNARY OPERATOR
// If we have to increment something by 1 or decrease by 1 or any number then we do:
//a=a+1
//b=b-1

//post increment(i++)it changes value after one line is printed using below code
console.log('a++=',a++)
//10
console.log('a++=',a++)
//11

//post decrement(i--)same as above it will print the value of a first then in other code it will decrease the value
console.log('a--=',a--)
//10
console.log('a--=',a--)
//9

//pre increment(++i)
console.log('++a=',++a)
//11
console.log('++a=',++a)
//11

//pre decrement
console.log('--a=',--a)
//9
console.log('--a=',--a)
//It will use the same value after decreaasing

//ASSIGNMENT OPERATORS

// '='
//It is used to assign a value

//'+='
//It is just the compact form of 'a=a+1'
a+=2
console.log('a=',a)
//12

//'-=','*=','/=','**='
//This all operators can be operated same as above code

//COMPARISON OPERATORS

//Equal to ==
//Not equal to !=
// Equal to and type ===
//Not equal to and type !==

//Some examples
console.log('a==b',a==b)
//False
console.log('a!=b',a!=b)
//True
console.log('a===b',a===b)
// Strickly check the type to
//False
console.log('a!==b',a!==b)
//True

//LOGICAL OPERATORS

//logical AND (&&)
//Logical OR (||)
//Logical NOT(!)

//logical AND (&&)
//All the condition should be true to print final ans as true,otherwise false
let cond1=a>b
let cond2=a===6
console.log('cond1 && cond2=',cond1 && cond2)
//False

//Logical OR (||)
//If any of the condition is true it prints out true and print false only in the case if both condition are false

//Logical NOT(!)
//If the condition is True it will print false and viceversa
//It only needs one condition