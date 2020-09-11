




//for (let y=1; y<4; y++){
    //console.log("hello")
//}

//let a= Number( prompt ("nhap so ")) 
//for (let i=1; i<=a; i++) {
  //  console.log("step" + i )
//}



//console.log("Coding is great")

//let a = Number (prompt("studentcount") )
//console.log("studentcount" +a)

//console.log("you look so beautiful today")

//let name = prompt ("Hi there, your name please")
//console.log("hello ban" + name)
 


//let a = prompt ("enter your first name")
//let b = prompt ("enter your last name ")
//console.log (a+b)

//let a = Number (prompt( "enter the length"))
//console.log ("the area is" + (a*a) )


//let a = Number (prompt("enter the radius"))

//console.log("the area of circle is"+ (a*3.14))

//for (let i=0; i<7;i++){
  //console.log("so"+i)
//}

//let a = Number (prompt("nhap so"))
//for (let i=0; i<a; i++) {
  //console.log(i)
//}

//let a = Number (prompt("nhap so"))
//for (let i=3; i<a; i++){
  //console.log(i)
//}

//let a= Number (prompt("nhap so thu 1 "))
//let b = Number (prompt ("nhap so thu 2 "))

//while (a<b) {
  //console.log("so"+ a)
  //a++;
//}

//let a = Number (prompt("nhap so thu 1"))
//let b = Number (prompt("nhap so thu 2"))
//while (a<b){
  //console.log(a);
  //a+=3;
//}


//let a = Number (prompt("nhap so"))
//function factorial (a)
//{
  //if (a===0)
  //{
    //return 1; 
  //}
  //return a * factorial (a-1);
//}
//console.log(factorial(a));

//let x = Number(prompt ("how old are you"));
//let y = 14 < x

//if (y){
  //console.log("enjoy!!");
//} else {
  //console.log("you are not old enough to view this content");
//}

//let x = Number (prompt("enter a number 1 "))
//let y = Number (prompt(" enter a number 2 "))
//let v = Number (x) > Number (y/2)


//if (v) {
  //console.log("higher half of "+ y);
//} else {
  //console.log("lower half of "+ y);
//}

//let x = Number (prompt("enter a number "))
//x = parseInt (x);
//if (x%2==0) {
  //console.log ("x la so chan");
//} else { 
  //console.log("x la so le");
//}

//let weight = Number (prompt("chi so can nang"))
//let length = Number (prompt("chi so chieu cao"))
//let bmi = weight / (height**2);

//if (bmi < 18.5) { 
  //return "underweight";

//}  else if (bmi <25) { 
  //return "normal"; } 
  //else if (bmi <30) {
    //return " overweight";
  //} else { 
   // return "Obese";
  //}
 
  //let weight = Number(prompt("nhap cang nang cua ban"));
  //let height = Number(prompt("nhap chieu cao cua ban"));
//let bmi = weight / (height^2);

  //if (bmi < 18.5){
    //console.log( "underweight");
  //} else if (bmi <25)
//{
  //console.log( "normal");
//} else if ( bmi < 30) { 
  //console.log( "overweight"); 
//}else {
  //console.log( "obese")
//}

//let x = Number (prompt("enter a number"))
//let v = Number (x/2)

//let flat = false 
//while (flat !=true){
  //let thang = prompt("Nhapthang:")
  //if (0<thang && thang<13 ){
    //flat=true 
    //if (3 <thang && thang <= 5) {
    //console.log ("mua xuan");
    //}
     //else if ( 6 <= thang && thang < 9) {
      // console.log("mua ha");
     //} else if ( thang <=9 && thang > 12 ){ 
     //console.log("mua thu");
     //} else if ( 1 <= thang && thang <= 2 ) {
      // console.log("mua dong");
     //}

  //}
//}



//public class NumberTriangle {
  //public static void main(String[] args) {
	//	int num;
		//System.out.print("Số dòng: ");
		//Scanner input = new Scanner(System.in);
		//num = input.nextInt();
		//for (int r = 1; r <= num; r++) {
			//for (int sp = num - r; sp > 0; sp--) {
				//System.out.print(" ");
			//}
			//for (int c = 1; c <= r; c++) {
			//	System.out.print(r);
			//}
			//for (int k = 2; k <= r; k++) {
				//System.out.print(r);
			//}
			//System.out.println();
		//}
	//}                     
//}

//var n = 5;
//generateNumberTriangle(n);

//function generateNumberTriangle(n) {
  //var width = (2*n) -1; 
  //var midpoint = Math.floor(width / 2 );
  //let level = ' ';

  //for (var i= 0; i <n; i++)
  //level = ' ';
  //for (var j = 0; j < width; j++) {
    //if (j < midpoint-i || j > midpoint +i) {
      //level += '. ';
    //} else {
     // level += '#';
    //}
    //}
    //console.log(level);
  //}

  //function pyramid(n) {  
    //let x = 0;
    //let value = '';
    //for (var i = 0; i < n; i++) {
      //x++;
      //value += '*';
      //console.log(value);

    //}
//}
//pyramid(3); 

  //let x = Number( prompt("enter a number:"))
   
  //if (x % 15 == 0) {
    //console.log ("fizzbuzz");
  //} else if (x % 5 == 0) {
    //console.log("buzz");
  //} else if (x %3 ==0) {
    //console.log ("fizz")
  //}
  //console.log(x);

  
  
  

//let x = Number(prompt("enter a number"))
//let y = Number (prompt("enter a number"))
//let z = Number (prompt("enter a number"))
//let delta= (y*y- 4*x*z)
//if(delta < 0)

//{
  //alert ("phuong trinh vo nghiem")
//}
//else if (delta == 0)
//{
  //let d = -y/2*x
  //alert ("phuong tring co nghiem kep"+ d);
//}
//else 
//{
//let x1 = (-y + Math.sqrt(delta))/2 *x;
//let x2 = (-y - Math.sqrt(delta))/2 *x;
  
  //alert ("phuong trinh co 2 nghiem x1 la " + (x1) + "va x2 la " + x2); 
//}




//let movietitle = ['batman', 'up', 'attack on titans', 'my boss my hero']
//let n= Number (prompt("enter a number"))
//let x = Number (prompt("enter a number"))
//let y = Number (prompt("enter a number"))
//let item = (prompt("choice again "))
//movietitle[x]= item;


//console.log(movietitle[x])
//movietitle.splice(x, y);
//console.log(movietitle);
//for (let i = 0; i < 5; i ++) {
  //movietitle [i] = ' ';

//}

//console.log(movietitle);



//while (true)  {
  //n= prompt ("enter a name")
  

  //let str = prompt ("enter a name")
  //let v =str.length
  //let flag = true

  //while (flag) {

//if (v < 15) {
//console.log (" good username");
//flag =false;
//} else {
  //v = prompt (" your name is too long. Please try again");
//}
  //}

//let n;
//while (true) {
//n = Number (prompt("enter a number "));
//if (n) {
  //break;
//}
//}
//console.log (n)
// let max_size = 0
// const arr = [3,5,6,1,8,9,2]
// for (let i = 0; i < arr.length; i++) {
//   if (max_size < arr [i])
//    max_size = arr [i]
// }

// console.log (max_size)

// let person = {
//     name: "Nam",
//     title: a,
//     rate: 8.7,
//     age: 19,
//     favs: ['coffe', 'code', 'basketball']
//   }
// let favs= person.favs;  
//     console.log(person)
//     console.log (favs)
// for (let i = 0; i< favs.length; i++){
//   console.log (favs[i]);
// }
// favs.push ("nitro5")
// console.log(favs);
// console.log (person);
  // console.log (movie)
  // console.log (movie.title)
  // let answer = "";
  // while(true){ 
  //     answer = prompt("What do you want to know?");
  //     if(answer == 'title'){
  //         alert(movie.title);
  //     }
  //     else if(answer == 'name'){
  //         alert(movie.name);
  //     }
  //     else if(answer == 'rate'){
  //         alert(movie.rate);
  //     }else{
  //         alert(answer + ' does not exist in our data');
  //     }
  // }
  
 // Create
  // movie.rate = 8.7
  // movie.rate += 0.5
  // let x = prompt("What do you want to update?");
  // if(x == 'title' || x == 'year' || x == 'rate'){
      // let a = prompt("What is the update?");
  //     console.log(a);
  //     console.log (movie)
  // }else{
  //     alert(x + " does not exist in our data, we will add new");
  //     movie[x] = prompt("Enter new data");
  //     console.log(movie);
  // }
  // console.log (person.name)
  // person.name= "nguyen phuong nam"
  // console.log (person.name)
  // console.log (person['age']);
  // person['age']= 19;
  // console.log (person['age'])
  // person.age ++
  // console.log (person)

  // console.log (person);
  // person.location = "tp Hcm";
  // person.status = "single";
  // console.log (person)

  // delete person.age;
  // console.log (person)
  // let personArr = [];
  // let person1 = {
  //   name:"MINH",
  //   age: 19,
  // }
  // let person2 = {
  //     name: "AN",
  //     age: 18,
  // }
  // // console.log (personArr);
  // personArr.push (person1);
  // personArr.push (person2);
  // // console.log (personArr);

  // // console.log (personArr[1]);
  // // let p = personArr [1]
  // // console.log(p);
  // // console.log (p.name);

  // // console.log(personArr[0].name)

  // for (let i = 0; i < personArr.length; i ++) {
  //   let p = personArr[i];
  //   console.log (p);

  // }

//   let movie = {
//   name: "Nam",
//   title: "fefefe",
//   rate: 8.4, 
// }

// console.log (movie)
// console.log (movie.title)
// let answer = "";
// while(true){ 
//     answer = prompt("What do you want to know?");
//     if(answer == 'title'){
//         alert(movie.title);
//     }
//     else if(answer == 'name'){
//         alert(movie.name);
//     }
//     else if(answer == 'rate'){
//         alert(movie.rate);
//     }else{
//         alert(answer + ' does not exist in our data');
//     }
// }

// Create
// movie.rate = 8.7;
// movie.rate += 0.5;

// let answer = prompt("What do you want to update?");
// if(answer == 'title' || answer == 'year' || answer == 'rate') {
//   movie.title= prompt ("what is the update")
//     console.log(movie);
// } else {
//     alert(answer + " does not exist in our data, we will add new item");
//     movie.answer  = prompt ("enter the new data")
//         console.log(movie);
// }

//question11

// let movie = {
//     title: " up",
//     year: 2002,
//     rate: 9.0,
//     casts: ['tony', 'minh', 'an']
// };
// console.log (movie)

// let cast= movie.casts
// console.log (cast);
// for (let i= 0; i < cast.length; i++) {
//   console.log (cast[i])
// }
// cast.push ("fffe");
// console.log (movie)
// let movie2 = {
//     title: "aquaman",
//     year: 2020,  
//     rate: 8.0
// }
// let movie3 = {
//     title: "batman",
//     year: 2021,
//     rate: 10
// }


// let movieArr = []
//     movieArr.push(movie1);
//     movieArr.push(movie2);
//     movieArr.push(movie3);

// // let p = movieArr [2];
// // console.log (p.title)
// for (let i =0; i <movieArr.length; i++){
//     let p = movieArr[i];

// console.log (p);
// p.rate+=0.7;
// console.log (p.rate)
// }

//question1
// let product = {
//   name: "Xiaomi rice cooker",
//   price: 1700,
//   brand: "Xiaomi",
//   color: "white"
// };
// let productArr= []
// productArr.push (product)
// for (let x in product ) {
//   console.log (x)
// }

//1.1 x receive property

// for (let i = 0; i < productArr.length; i++ )
//     console.log (productArr[i])

//question4

// let dict = {
//     debug: "The process of figuring out why your program has a certain error and how to fix it",
//     done: " when your task is complete, the only thing you have to do is to wait for usesers to use it (no additional codes or actions needed",
//     defect: " the formal word for error",
//     pm: " the short version of project manager, the person in charge of the final result of a project",
//     uiux: "Ui means User Interface, UX mean User Experience, are the process to define how your products looks and feels",    
// }

// alert('Hi there, this is a new dictionary.');
//  let answer = '';
//  let definition;
//  let flag = true;
//  let flag2 = true;
//  let answer2 = '';
//  while(flag)
//  flag2=true
//      answer = prompt('Enter a keyword.');
//      if(dict[answer] == undefined){
//          dict[answer] = prompt(`We could not find your word: ${answer}, leave your explanation.`);
//          alert('Done');
//      }else{
//          definition = answer;
//          definition += "\n" + dict[answer];
//          alert(definition);
//      }
//      while(flag2) {
//            answer2= prompt('Do you want to continue (Y/N)?')
//          if(answer2 == 'y' || answer2 == 'Y'){
//              flag2 = false;
//          }
//          else if(answer2 == 'n' || answer2 == 'N'){
//              flag2 = false;
//              flag = false;
//          }
//      }
  
// let dict = {
//     debug: "The process of figuring out why your program has a certain error and how to fix it",
//     done: " when your task is complete, the only thing you have to do is to wait for usesers to use it (no additional codes or actions needed",
//     defect: " the formal word for error",
//     pm: " the short version of project manager, the person in charge of the final result of a project",
//     uiux: "Ui means User Interface, UX mean User Experience, are the process to define how your products looks and feels",    
//   }
//   alert('Hi there, this is a new dictionary.');
//    let answer = '';
//    let definition;
//    let flag = true;
//    let flag2 = true;
//    let answer2 = '';
//    while(flag){
//        flag2 = true;
//        answer = prompt('Enter a keyword.');
//        if(dict[answer] == undefined){
//            dict[answer] = prompt(`We could not find your word: ${answer}, leave your explanation.`);
//            alert('Done');
//        }else{
//            definition = answer;
//            definition += "\n" + dict[answer];
//            alert(definition);
//        }
//        while(flag2){
//            answer2 = prompt('Do you want to continue (Y/N)?')
//            if(answer2 == 'y' || answer2 == 'Y'){
//                flag2 = false;
//            }
//            else if(answer2 == 'n' || answer2 == 'N'){
//                flag2 = false;
//                flag = false;
//            }
//        }
//    };
//            
