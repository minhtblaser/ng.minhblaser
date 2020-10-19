// console.log ("hello")

// function xinchao () { 
//     console.log ("hello")
// }

// xinchao ()
// let input = Number( prompt ("enter number 1:"))
// let input1 = Number (prompt("enter number 2:"))
// function Sum (num1, num) { 
//     alert("your result" + " " + (num1 + num) )
// }

// Sum(input1,input)



//bt function
// let movie = {
//   name: "Nam",
//   title: "darknight",
//   rate: 8.4, 
// }
// let input = prompt ("nhap vao thu ban mun doc")
// function read (titles) {
//     console.log (movie[titles]) 
    
// }

// read (input)

// let answer = prompt("What do you want to update?");
// let answer1 = prompt ("your opinion")

// function Update (property, text) {
//     movie[property] = text 
// }

// let answer3 = prompt ("your create")
// let answer4 = prompt (" your style")
// function Create (property1, text1) {
//     movie[property1] = text1
// }

// Update (answer, answer1)
// Create (answer3, answer4)
// read (input)


// console.log (movie)




//bt1
// let my_flock = [5,7,300,90,24,50,75]
// function myFlock (flock) {
//     let result= " "
//     for (let i =0; i <  flock.length; i ++) {
//         result = result + flock[i] + " "
// }
// console.log("my flock is: " + result);
// }
// // myFlock (my_flock);

// Array.prototype.max = function max() {
//     return Math.max.apply(null, this);
//   };
// // console.log ("my biggest sheep is: " + my_flock.max());


// function afterOneMonth (flock1) {
//     let result1= " ";
//     for ( let i = 0; i < flock1.length; i++) {
//     flock1[i] +=50;
//     result1= result1 + flock1[i] + " ";
// }
// console.log ("after a month, this is my flock: " + result1)
// }
// // afterOneMonth (my_flock);

// function increase_kg(kg)
// {
// for(_num in my_flock)
// {
//     my_flock[_num]= my_flock[_num] + kg;
// }
// console.log("One month has, passed, my sheeps have grown, here are there sizes")
// console.log(...my_flock);
// }
// console.log("\nMONTH 1");
// increase_kg(50);

// console.log("\nMONTH 2");
// increase_kg (50);

// console.log("\nMONTH 3");
// increase_kg(50);

// function main () {
//     // console.log("my flock is: " + result);
//     myFlock (my_flock);

//     // max();
//     console.log ("my biggest sheep is: " + my_flock.max());

//     // console.log ("after a month, this is my flock: " + result1)
//     afterOneMonth (my_flock);

//     console.log("\nMONTH 1");
//     increase_kg(50);

//     console.log("\nMONTH 2");
//     increase_kg (50);

//     console.log("\nMONTH 3");
//     increase_kg(50);
// }
//     main ();


// //bt2
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

  // let myFlock = [5 , 7, 300 , 30 , 24 , 50 , 75]
  // let bigSize = 0;
  //     for (let i=0; i < myFlock.length; i++) {
  //         if (bigSize < myFlock[i])
  //             bigSize = myFlock[i]
  //             }
  //     myFlock[myFlock.indexOf(bigSize)]=8
  //     let b = myFlock.indexOf(bigSize)
  //     console.log (b)
  //     console.log (myFlock)
  //     // result1 = 0;
  //     // for (let i =0; i<myFlock.length; i++) {
  //     //     result1 = result1 + myFlock[i] + " "
  //     // }
  //     // alert("after shearing, here is my flock \n" + result1)
 