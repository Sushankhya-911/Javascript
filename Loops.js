//Loops are used to execute a code in a repeated way.

// for (initial;stop;updation){<statement>}
for (let i=1;i<=5;i++){
    console.log('Loop is executed')
}
//Calculate sum of n numbers up to 10
let sum=0
for (let n=1;n<=10;n++){
    sum=sum+n
}
console.log('sum =',sum)
//The variable that is initialized in for loop or in block code,cant be accessed outside .

//Infinite loop
// One must not create a infinite loop because it occupy the more storage and can causea  issue in your PC,So,dont try this
//It is the condition where stop point is always true.

//while loop
//initializaion
// while(<condition>){
// printing statement
//updation
//}

let b=1;
while(b<=10){
    console.log('Print i=',b)
    b++
}
//If the condition given is true ,then only it works otherwise it will not.

// do -while
let a=1
do{
    console.log('do-while loop')
    a++
}while(a<=10);
    //put a semimcolon at the last of while(condition).Although it works ,but to make it a bit systematic

// for - of loop
let str='String'
for (let i of str){
    console.log('The each character of str',i)
}
//It is basically used for strings and arrays.

// for - in loop
let student={
    name:'Rahul kumar',
    age:20,
    cgpa:3.50
}
for (let key in student){
console.log('key=',key,'value=',student[key])
}
//It is especislly used in objects and arrays