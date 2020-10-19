<<<<<<< HEAD
// bt1
//a
// let n= Number (prompt("enter N"))
// let inputNumber= Number (prompt("enter a inputNumber"))
// function findOppositeNumber(x, input) {
//    alert ("oppositeNumber:" + (input + (x/2)) % x) 
// }

// findOppositeNumber (n, inputNumber)


//b
// let string1 = prompt ("enter a string 1")
// let string2 = prompt ("enter a string2")
// let result = " ";
//     for (let i = 0; i < string1.length ||
//              i < string2.length; i++) {
//                  if (i < string1.length)
//                     result += string1[i];
//                  if (i < string2.length)
//                     result += string2[i]
//              }

// alert(result)

// bt2
// B
let result = document.getElementById("result1")
let random = Math.floor (Math.random() * 11);
let number = document.getElementById ("input1");
let count = 0;
let button= document.getElementById ("result");
    button.addEventListener('click', function (){
        let inputNumber = Number(number.value);
        console.log(inputNumber);
    if (inputNumber != random && inputNumber < 11 &&inputNumber > 0) {
        count ++
        result.innerHTML= `good luck next time, this is first chance, try again  `
    }
    
    if (inputNumber == random && inputNumber < 11 && inputNumber > 0) {
        result.innerHTML= "you win "
    }

    if (count == 2) {
        result.innerHTML= "you still have the last chance"
    }

    if (count == 3) {
        result.innerHTML= "you lose, see you next time"
    }
    if (count > 3) {
        count = 0;
    }
})
console.log(random)

=======
// bt1
//a
// let n= Number (prompt("enter N"))
// let inputNumber= Number (prompt("enter a inputNumber"))
// function findOppositeNumber(n, inputNumber) {
//    alert ("oppositeNumber:" + (input + (x/2)) % x) 
// }

// findOppositeNumber (n, inputNumber)


//b
// let string1 = prompt ("enter a string 1")
// let string2 = prompt ("enter a string2")
// let result = " ";
//     for (let i = 0; i < string1.length ||
//              i < string2.length; i++) {
//                  if (i < string1.length)
//                     result += string1[i];
//                  if (i < string2.length)
//                     result += string2[i]
//              }

// alert(result)

// bt2
// B
// let result = document.getElementById("result1")
// let random = Math.floor (Math.random() * 11);
// let number = document.getElementById ("input1");
// let count = 0;
// let button= document.getElementById ("result");
//     button.addEventListener('click', function (){
//         let inputNumber = Number(number.value);
//         console.log(inputNumber);
//     if (inputNumber != random && inputNumber < 11 &&inputNumber > 0) {
//         count ++
//         result.innerHTML= `good luck next time, this is ${count} chace, try again  `
//     }
    
//     if (inputNumber == random && inputNumber < 11 && inputNumber > 0) {
//         result.innerHTML= "you win "
//     }
  
//     if (count == 3) {
//         result.innerHTML= "you lose"
//     }
//     if (count > 3) {
//         result.innerHTML= "you lose"
//     }
// })

>>>>>>> 3d1d4e2d67798a74332c0766161b81f37f3c9ab4
