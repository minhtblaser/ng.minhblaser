

// let li= document.getElementsByTagName("li");
// console.log(li[0])
// for(let i=0;i<3;i++){
//     console.log(li[i])
// }



// let a =1
//  setInterval(function(){
//       console.log(a)
//     a++
//  },1000)

let input = document.getElementById("name");
let name;
let result = document.getElementById("result");
input.addEventListener('input', () => name = input.value)
let upperIt = document.getElementById("btn-upper");
upperIt.addEventListener('click', function(){
    console.log("Just click it");
    console.log(`User's name: ${name}`);
    console.log(`User's name uppercase: ${name.toLowerCase()}`);
    result.innerHTML = name.toLowerCase();
})