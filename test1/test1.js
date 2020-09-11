//question1
// let str= prompt ("nhap chuỗi:")
// let newstr = " "
// for (let i = str.length-1; i >=0; i--) {
//     newstr += str[i]
// }
// console.log (newstr)

//question2
// let str=prompt ("nhap chuoi")
// let strArr = str.split (" ")
// 	for(let i=0;i<strArr.length;i++){
//         let charArr=strArr[i].split("");
// 	        charArr[0]=charArr[0].toUpperCase();
//             strArr[i]=charArr.join("");
//     }
// console.log (strArr)

//question3

// let str= prompt ("nhap gia tri")
// let uniqueSet= new Set (str)
// let uniqueArry= [...uniqueSet]
// console.log (uniqueSet)


// question4

// let people = [
//     {
//         name: 'minh',
//         age : 18,
//         status: "chairman"
//     },
//     {
//         name: 'dat',
//         age : 20,
//         status: "HR"
//     },
//     {
//         name: 'dat',
//         age : 20,
//         status: "HR"
//     }
// ]
   
// alert ('Hi user, what do you want? (C,R,U,D)')
// let answer = prompt ("please choice your request by write D,R,C,U")
// if (answer == "C" || answer == "c")
//     {
//     let newName = prompt("Enter  the new name:")
//     let newAge = prompt ("Enter the new age ")
//     let newStatus = prompt("Enter the new status:")
//     people.push({name: newName, age: newAge, status: newStatus})
//     }
// for (let i = 0; i<people.length; i++){
//     console.log(`${i+1}. ${people[i].name} \n  ${people[i].age}\n ${people[i].status} \n`) 
// }

//  if (answer == "U"|| answer == "u") {
//     let positionUpdate = Number( prompt("Enter position:"))
//     let newName = prompt("Enter  the new name:")
//     let newAge = prompt ("Enter the new age ")
//     let newStatus = prompt("Enter the new status:")
//     people[positionUpdate-1].name = newName
//     people[positionUpdate-1].age = newAge
//     people[positionUpdate-1].status = newStatus
// }
// for (let i = 0; i<people.length; i++){
//     console.log(`${i+1}. ${people[i].name} \n ${people[i].age}\n ${people[i].status}`)
// }

// if (answer == "R" || answer == "r") {
//     for (let x in people)
//         console.log (x + people[x])
// }
// if (answer == "D" || answer == "d") {
//     let positiontodelete = Number(prompt("enter position"))
//     people.splice(positiontodelete -1)
//     for (let i = 0; i < people.length; i++ ) {    
//         console.log(`${i+1}. ${people[i].name} \n ${people[i].age}\n ${people[i].status} `)
//         }
//     } 

//question5


let ngay= Number (prompt ("nhap ngay"))
let thang= Number (prompt ("nhap thang"))
let nam= Number (prompt("nhap nam"))

if (0 < ngay < 32 && 0< thang <12) {
    alert ("ngay: " + ngay + "/" + thang + "/" + nam + " hople")
}