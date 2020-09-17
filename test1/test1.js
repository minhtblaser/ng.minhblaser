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


let day= Number (prompt ("nhap ngay"))
let month= Number (prompt ("nhap thang"))
let year= Number (prompt("nhap nam"))
let flag = true
// let a= [31,[28,29], 31,30,31,30,31,31,30,31,30,31]
// let count = 0
// let flag =true
// kt daymonth co hop le khong
if ( day> 0 && day<=31 && month > 0 && month <= 12 && year >1) {
    if ( day> 0 && day<=31) {
        if (month <=7  && month !=2) {
            if (month%2!=0) {
                // console.log ("thang"+ month + " co 31 day") 
                alert ("day: "+ day + "/" +month + "/" + year + " hop le")
            }
        }    
if ( day> 0 && day<=30) {    
        if (month <=7  && month !=2) {           
            if (month %2 ==0 && month !=2) {
            // console.log ("thang"+ month +" co 30 day")
            alert ("day: "+ day + "/" +month + "/" + year + " hop le")
        }
    }
if ( day> 0 && day<=31) {
        if (month >=8) {
            if (month%2==0) {
            // console.log ("thang"+ month + " co 31 day") 
            alert ("day: "+ day + "/" +month + "/" + year + " hop le")
        }
    }
 if ( day> 0 && day<=30) {
        if (month >=8) {
            if (month%2 !=0) {
            // console.log ("thang"+ month + " co 30 day")
            alert ("day: "+ day + "/" +month + "/" + year + " hop le")
        }
    }
    if (year%400 ==0 || (year%4==0 && year % 100 !=0 && month ==2 )) {
        if (day > 0 && day <= 29) {
            console.log ("thang"+ month + " co 29 day")
            alert ("day: "+ day + "/" +month + "/" + year + " hop le")
        }
    }
    if  (year%400 !=0 && month ==2 ) {
        if (day > 0 && day <= 28) {
        console.log ("thang"+ month + " co 28 day")
        alert ("day: "+ day + "/" +month + "/" + year + " hop le")
        }
    }
}
}
}
}
}



//kt nam 

// if (year%400 ==0 || (year%4==0 && year % 100 !=0 )) {
//     alert ("nam nhuan")
// } else {
//     alert ("nam khong nhuan")
// }

//  kt motmonth co bao nhiu day
    // if (month <=7  && month !=2) {
    //     if (month%2!=0) {
    //             console.log ("thang"+ month + " co 31 day")
    //     } else if (month %2 ==0) {
    //         console.log ("thang"+ month +" co 30 day")
    //     }
    // }
    // if (month >=8) {
    //     if (month%2==0) {
    //         console.log ("thang"+ month + " co 31 day") 
    //     }
    //      else if (month%2 !=0) {
    //         console.log ("thang"+ month + " co 30 day") 
    //     }
    // }
    // if (year%400 ==0 || (year%4==0 && year % 100 !=0 && month ==2 )) {
    //     console.log ("thang"+ month + " co 29 day")
    // } else if  (year%400 !=0 && month ==2 ) {
    //     console.log ("thang"+ month + " co 28 day")
    // }
