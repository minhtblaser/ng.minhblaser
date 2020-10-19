// bt3
// const a = [4, 5, 7, -8];
// console.log(...a);


// bt4
// alert ("Hi there, welcome to my shop, what do you want (C, R, U, D)");
// let answer= prompt ("please choice your command");
// let position;
// let item = [ "Jeans", "T-shirt" , "Socks" ]
// while (true) {
//     if (answer == "R" || answer =="r") {
//         let result = "";
//         for (let i = 0; i < item.length; i++) {
//             result = result + ( i+1 + "." + item[i] + "\n");
//         }
//         alert ("the current items are:" + "\n" + result) 
//     }
//     else if (answer == "D" || answer == "d") {
//         position = Number(prompt("please choice position to delete"));
//         item.splice(position - 1, 1);
//         alert ("done");
//         }
//    else if (answer == "C" || answer == "c") {
//         let create = prompt ("create the neww item")
//         item.push (create)
//         alert ("done")
//    }
//    else if (answer == "U" || answer == "u") {
//        let positionUpdate = Number (prompt("enter the postion to update"))
//        let newItem = prompt ("create new item")
//        item[positionUpdate-1] = newItem
//        alert ("done")
//    }
//    else {
//        alert ("this command is not supported")
//    }
//    answer = prompt ("please choice your command");
// }


// bt5
// sum of number separated by commas
// let b=prompt("Enter a sequence of Number, seperated by commas (,)")
// let a = b.split(",")
// let c =0
// for(let i=0;i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log(a)
// for(i=0;i<a.length;i++){
//     c +=a[i]}
// console.log(c)

// bt6
// let b=prompt("Enter a sequence of Number, seperated by commas (,)")
// let a = b.split(",")
// let c =0
// for(let i=0;i<a.length;i++){
//     a[i]=Number(a[i])
// }
// console.log(a)
// let d = Math.min(...a)
// console.log(...a)
// alert(`The smallest number is ${d}`)


// bt7
// const arr = [3,4,6,89,-11,20];
// let count = 0;
// let checkNumber = Number(prompt("enter a number to check"));
// for (let i = 0; i<=arr.length; i++) {
//     if (checkNumber == arr[i]) {
//         alert (checkNumber +"Number in your arr")
//         count++
//     }
// }
// if (count==0) {
//     alert ("no Found")
// }



//bt8
// let myFlock = [5 , 7, 300 , 30 , 24 , 50 , 75]

// function mySheep () {
//     // let myFlock = [5 , 7, 300, 30, 24, 50 ,75]
//     let result = 0
//         for (let i= 0; i < myFlock.length; i++) {
//             result = result + (myFlock[i]) + " "
//         } 
//             alert("My name ís MInh, this is my flock " + "\n" + result + " ")
// }

// function myBigsheep (){
//     let bigSize = 0;
//     for (let i=0; i < myFlock.length; i++) {
//         if (bigSize < myFlock[i])
//             bigSize = myFlock[i]
//             }
//         alert ("this is the biggest sheep " + bigSize + " let's kill it")
// }
  
// function killIt () {
//     let bigSize = 0;
//     for (let i=0; i < myFlock.length; i++) {
//         if (bigSize < myFlock[i])
//             bigSize = myFlock[i]
//             }
//     myFlock[myFlock.indexOf(bigSize)]=8
//     result1 = 0;
//     for (let i =0; i<myFlock.length; i++) {
//         result1 = result1 + myFlock[i] + " "
//     }
//     alert("after shearing, here is my flock \n" + result1)
// }


// function oneMonthafter (flock) {
//     let result2 = 0;
//     for (let i =0; i< flock.length; i++) {
//         flock[i] += 50;
//         result2 = result2 + flock[i] + " "
//     }
//     alert ("one Month after, there is new size " + result2)
// }

// function increase_kg (kg) {
//     for(_num in  myFlock)
// {
//     myFlock[_num]=  myFlock[_num] + kg;
// }
// console.log("One month has, passed, my sheeps have grown, here are there sizes")
// console.log(... myFlock);
// }
// // console.log("\nMONTH 1");
// // increase_kg(50);

// // console.log("\nMONTH 2");
// // increase_kg (50);

// // console.log("\nMONTH 3");
// // increase_kg(50);
// function main () {
// mySheep();

// myBigsheep();

// killIt ();

// oneMonthafter (myFlock)

// console.log("\nMONTH 1");
// increase_kg(50);

// console.log("\nMONTH 2");
// increase_kg (50);

// console.log("\nMONTH 3");
// increase_kg(50);
// }
// main ()


// bt10


//11
// let array = prompt("Nhap day so:")
// array = array.split(",")
//11.1
// let result = []
// let count = 0
// for (let i = 0 ; i < array.length ; i++){
//     if (array[i]%2 != 0){
//         result[count]=array[i]
//         count++
//     }
// }
// alert(result)
//11.2
// array = array.filter( x => x%2!=0)
// alert(array)


