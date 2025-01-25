//It is a sequence of characters used to represent text

//Create a string
let str='String'
//OR
let STR="String"
console.log(STR)
//Strings have some properties and functions/in-built

//String length
console.log(str.length)

//String Indices
console.log(str[0],str[1])

//Template Literals
let specialstring=`This is a special string formed in forms of backtricks`
console.log(specialstring)
//It is also used as compact veersion of below example.
let obj={
    item :'pen',
    price :10
}
console.log('The price of',obj.item,'is',obj.price,'rupees')
//The template literals use has make it in easier way.
let output=`The price of ${obj.item} is ${obj.price} rupees`
console.log(output)

//${} it is a string interpoation
//Anything inside it can be printed output

// Escape characters
// \n to make code in next line
console.log('Escape\n characters')
//Escape characters are considered as 1.

//There arae in-built functions to manipulate a string
//str.toUppercase
//str.toLowercase

let str1='abcdefg'
let newstr=str1.toUpperCase()
console.log(newstr)

//str.trim()
let StR='    Sushankhya     '
console.log(StR.trim())
//It will clear all the spaces in the start and end of the sentence or word but not in the middle.

//str.slice(start,end?)
let str3='Kalpana'
console.log(str3.slice(0,3))
//with default ending it prints the hold string from the initial point.

//str.concat(<another string>)
let str4='Sapana'
console.log(str3.concat(str4))
console.log(str3.concat(str4+123))



//str.replace(searchval,Newval)
console.log(str4.replace('S','s'))
console.log(str4.replace(str4[0],'s'))
//Remember string is an immutable 

//If we have to replace ALL then,
let str5='SuSSUSUSUS'
console.log(str5.replaceAll('S','s'))

//str.charAt()
let str6='I love JS'
console.log(str6.charAt(3))
//It gives out the alphabet at the index of 3.