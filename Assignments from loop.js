//Print all even numbers from 0 to 100

for(i=2;i<=100;i=i+2){
    console.log('Even numbers =',i)
}
//Create a random game where you start with any random game number.Ask the user to  keep guesssing the game number until the user enters correct value.
let random_number=parseInt(prompt('Enter a number:'))
const Correct_number=5
while(random_number!== Correct_number){
    console.log('You have not made a correct decision')
    random_number=parseInt(prompt('Enter a number :'))
}
console.log('Congratulations you have made a right decision')
//The reason to use parseInt instead of prompt is because it gives answer in integer
// If we would have use prompt then it result in a string and we need to use != instead of !===.
