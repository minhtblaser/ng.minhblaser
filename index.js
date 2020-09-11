// check point 3
//let keyanswer=['1:none', '2:4 legs', '3:8 legs ', '4:12 legs']
//let flag = true 
//alert ("how mant legs does a spider have");
//for (let i= 0; i < 4; i ++ );
//console.log(keyanswer)

//let x = Number (prompt("chose your answer"))


//while (flag) {
//if (0 <x  && x < 4);
//flag = false;
 //if (x == 3 ){
  //  console.log ("bravo, you are correct")
//} else {
    //x = Number (prompt(" your answer is wrong, please try again"))
//} 
//}

//check point 3
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


// session 3 
// swaping variable 
// way 1:
//let a = 1;
//let b = 2;
//[a, b]= [b, a ];
//console.log ("in a=" + a + " in b=" + b)

// way 2
//let a =1; 
//let b =2;
//let temp;

//temp = a
//a = b
//temp = b
//console.log (" in a =" + a + "in b jjjj=" + b)

// string spilt in javascript 
//let a = " hello beauty there"
//let array = a.split (' ')
//console.log (array)

//question3 
//let a = [4 ,5 ,6, -8]
//let b = {...a}
//console.log (b)

//question 4


//let x = ['Jeans', 'T-Shirt', 'Socks'];
//let panel = ''
//while (panel != null)
//{
  //panel= prompt ("Hi there, welcome to shop admin panel!! \n" + "what do you want to")
//if (panel = null){ panel= panel.toUpperCase()}
//if (panel == "R")
//{
  //console.log (R);
//}
//else if (panel == "C");
//{
  //let C = prompt ("enter a number of the new Item!!")
  //R.push (C);
  //alert ("done!")
//}
 //if (panel == "U")
//{
  //let U = 0;
//while (true)
//{
  //U= Number (prompt("Enter a number position you want to update"))
  //if (0< U && U <=R.length)
  //break;
//}
//let update = prompt ("enter the new name")
//R.splice(U,0, update)
//alert ("done!!");
//}
//else if (panel == "D")
//{
  //let D = 0;
  //while(true)
//{
  //D= Number (prompt("enter a number"))
  //if (0 < D && D<=R.length)
  //break;
  //else alert ("out of position")
//}
//R.splice (D, 1);
//alert ("Done");
//}
//else
//{
  //alert ("this command is not supported")
//}
//}

//question5
  //let num= prompt("enter a sequence of number, seperated by (,)")
//if (num != null)
//{
  //let trans = num.split(',')
  //let sum = 0
  //for (i=0; i <trans.length; i++)
  //{
    //sum += parseInt (trans[i])
  //}
  //if (isNaN(sum))
  //{
    //alert("please enter a number")

  //}
//else 
//console.log ("the sum of them is"+ sum)
//}

//question 6

//let num = prompt ("nhap chuoi di ban")
//let temp = 0;
//if (num!=null)
//{
  //let trans = num.split ('.')
  //let min = parseInt (trans[i])
  //for (i=1; i< trans.length; i ++)
  //break;
//} 
 //else 
 //{
   //if (min>parseInt(trans[i]))
   //{
    // min= parseInt (trans[i])
   //}
 //}
//if (temp==1)
//tmp = 0;
//else {alert("the smallest number is" +min)}

//let day_so = prompt("Nhap day so:")
//day_so = day_so.split(",")
//console.log(Math.min(day_so))

 //for(let i=0 ; i<day_so.length ; i++){
   // { if (min > parseInt(day_so[i]) {
    //  min = parseInt(day_so[i])
     //}
  
    //}
  //}
 //alert("gia tri nho nhat " + min)


//question7
// const arr= [3,4,6,-9,10,-88,2]
// let count = 0
// let check_number = Number (prompt('enter a number'))
// for (let i = 0; i < arr.length; i++) {
//   if (check_number== arr [i]) {
//   alert (check_number + "is Found in my array")
//   count ++
//  }
//  }
// if (count==0) {
//   alert ("no found")
// }

//question 8
// let my_flock = [5,7,300,90,24,50,75]
// let result = " "
// let max_size = 0
// for (let i = 0; i < my_flock.length; i++) {
//   result = result + my_flock [i] + " "
//   if (max_size<my_flock[i]) 
//   max_size= my_flock[i];
// }

// alert ("this is my sheep:\ n" + result)
// alert ("Now my biggest sheep has size"+ max_size + "let's shave it")

//   my_flock [my_flock.indexOf(max_size)]= 8

//   result = 0
//   for (let i=0; i< my_flock.length; i++){
//       result = result + my_flock[i] + " "
//       my_flock[i] +=50
//   }
// alert ("after shearing, here is my flock \n" + result)
// alert ("there is size after a month" + my_flock)

//   for (let month = 1; month <5; month ++ ) {
//     for (let i=0; i< my_flock.length; i++){
//         my_flock[i] +=50
//         alert ("month" + month)
//         alert ("after a month their size" + my_flock)
//     }
//   }

//question10
// let names = prompt ("enter a sequence of names:")
// names = names.split(",")
// console.log (names)
//way1
// //for  (let i= 0; i < names.length; i++) {
//   names [i] = "<" + names[i] + ">"
// }
// console.log (names)

//way2
//let result = names.map(x =>"<" + x + ">")
//console.log(result)

//question11
// let array = prompt ("nhap day so")
// array= array (",")
// way1
// let result = []
// let count = 0
// for (let i = 0 ; i < array.length ; i++){
//     if (array[i]%2 != 0){
//         result[count]=array[i]
//         count++
//     }
// }
// alert(result)
//way2
// array = array.filter( x => x%2!=0)
// alert(array)

//check point session4

//INIT
// let movie = {
//   name: "Nam",
//   title: a,
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

//Create
// movie.rate = 8.7;
// movie.rate += 0.5;

// let answer = prompt("What do you want to update?");
// if(answer == 'title' || answer == 'year' || answer == 'rate'){
// movie[a]  = prompt ("what is the update")
//     console.log(movie);
// }else{
//     alert(answer + " does not exist in our data, we will add new");
//     movie[answer] = prompt("Enter new data");
//     console.log(movie);
// }


//session4
//1. For and Object

//1.1 Property
//1.2
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };

// for (let x in product) {
//     console.log(x + ": " + product[x]);
// }

//2.

// const task = {
//     subject: 'Implement login feature',
//     createdBy: 'Hoang Ngoc Duc',
//     assignTo: 'Nguyen Phuong Nam',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
//  ({subject,dueDate,assignTo}=task);
// console.log(subject+"\n",dueDate+"\n",assignTo)


//6.


// function _print(){
//     for(i in _save)
//     { 
//         ({learn,complete}=_save[i])
//          console.log((++i) +".  " + learn + "\n\tComplete: " + complete)
//     }
// }
// console.log("Hi there, this is your learning task to front-end developer career:")
//     _print();
// while(true)
// {  
//     let add = prompt("Enter your command (New, Delete, Update, Complete, Cancel)")
//     if(add!=null)
//     {
//         if(add=="New")
//         {
//             let task = prompt("Enter new task:")
//             if(task!=null && task!="")
//             {
//                 let t = {learn: task,complete: 'False'}
//                 _save.push(t);
//                 console.clear();
//                 _print();
//             }
//             else{alert("Please enter Again!")}    
//         }
//         else if(add=="Update")
//         {
//             let title;
//             let ps =Number(prompt("Enter position:"))
//             if(ps!=null&&(ps-ps.toFixed(0)==0)&&(0<ps&&ps<_save.length))
//             {
//                 title = prompt("Enter new title")
//                 if(title!=null&&title!="")
//                 {
//                     for(i in _save[ps-1])
//                     {
//                       _save[ps-1]={learn: title, complete: 'false'}  
//                     }
//                     console.clear();
//                     _print();
//                 }
//             }
//             else{alert("Please enter Again!")}
//         }
//         else if(add=="Complete")
//         {
//             let ps =Number(prompt("Enter position:"))
//             if(ps!=null&&(ps-ps.toFixed(0)==0)&&(0<ps&&ps<_save.length))
//             {
//                 for(i in _save[ps-1])
//                 {
//                     ({learn,complete}= _save[ps-1])
//                     _save[ps-1]={learn,complete: 'True'}  
//                 }
//                 console.clear();
//                 _print();
//             }
//             else{alert("Please enter Again!")}
//         }
//         else if(add=="Delete")
//         {
//             let ps =Number(prompt("Enter position:"))
//             if(ps!=null&&(ps-ps.toFixed(0)==0)&&(0<ps&&ps<_save.length))
//             {
//                 console.clear();
//                 _save.splice(ps-1,1,)
//                 _print();
//             }
//             else{alert("Please enter Again!")}
//         }
//         else if(add=="Cancel") break;
//     }
//     else{alert("Please enter again!")}
// }

//6.6

// let tm1=0
// function _change(){
//     for( i in _save)
//     { 
//         if(tm1==0)_save[i].b = '. [ ] ';  
//         ({b,learn} = _save[i])
//         console.log((parseInt(i)+1)+b+learn)
//     }
// }
// console.log("Hi there, this is your learning task to front-end developer career:")
// _change();
// while(true)
// {
//     let ps =Number(prompt("Enter a number you want to note!"))
//     if(ps!=null&&(ps-ps.toFixed(0)==0)&&(0<ps&&ps<=_save.length))
//     {
//         for(i in _save)
//         {
//             if((ps-1)==i) 
//             {
//                 tm1=1;
//                 if(_save[i].b == '. [X] ')_save[i].b = '. [ ] ';
//                 else _save[i].b = '. [X] ';
//             }
//         }
//         console.clear();
//         _change();
//     }
//     else
//     {
//         alert("Please enter Again!")
//         break;
//     } 
// }


//4
// let dict = {
//   debug: "The process of figuring out why your program has a certain error and how to fix it",
//   done: " when your task is complete, the only thing you have to do is to wait for usesers to use it (no additional codes or actions needed",
//   defect: " the formal word for error",
//   pm: " the short version of project manager, the person in charge of the final result of a project",
//   uiux: "Ui means User Interface, UX mean User Experience, are the process to define how your products looks and feels",    
// }
// alert('Hi there, this is a new dictionary.');
//  let answer = '';
//  let definition;
//  let flag = true;
//  let flag2 = true;
//  let answer2 = '';
//  while(flag){
//      flag2 = true;
//      answer = prompt('Enter a keyword.');
//      if(dict[answer] == undefined){
//          dict[answer] = prompt(`We could not find your word: ${answer}, leave your explanation.`);
//          alert('Done');
//      }else{
//          definition = answer;
//          definition += "\n" + dict[answer];
//          alert(definition);
//      }
//      while(flag2){
//          answer2 = prompt('Do you want to continue (Y/N)?')
//          if(answer2 == 'y' || answer2 == 'Y'){
//              flag2 = false;
//          }
//          else if(answer2 == 'n' || answer2 == 'N'){
//              flag2 = false;
//              flag = false;
//          }
//      }
//  };
//         ``

//5.1.
// let products = [
//     {
//         position: '#1',
//         Name: 'Xiaomi portable charger 20000mah',
//         Brand: 'Xiaomi',
//         Price: '428',
//         Color: 'White',
//         Category: 'Charger',
//     },
//     {
//         position: '#2',
//         Name: 'VSmart Active 1',
//         Brand: 'Xiaomi',
//         Price: '5487',
//         Color: 'Black',
//         Category: 'Phone',
//     },
//     {
//         position: '#3',
//         Name: 'IPhone X',
//         Brand: 'Apple',
//         Price: '21490',
//         Color: 'Gray',
//         Category: 'Phone',
//     },
//     { 
//         position: '#4',
//         Name: 'Samsung Galaxy A9',
//         Brand: 'Samsung',
//         Price: '8490',
//         Color: 'Blue',
//         Category: 'Phone',},
// ];
// for (let i = 0; i < products.length; i++) {
//     console.log(`---------------------------------------- \n ${products[i].Name} \n ${products[i].Price}`)
// }

// //5.2
// let position = Number(prompt('Enter production position (number)'));
// console.log(`position: ${products[position - 1].position}`);
// console.log(`Name: ${products[position - 1].Name}`);
// console.log(`Brand: ${products[position - 1].Brand}`);
// console.log(`Price: ${products[position - 1].Price}`);
// console.log(`Color: ${products[position - 1].Color}`);
// console.log(`Category: ${products[position - 1].Category}`);

// //5.3.
// let category= prompt ("enter your category")
// for (let i = 0; i < products.length; i++) {
//     if(products[i].Category == category){
//         console.log('-----------------------------------------');
//         console.log(`Name: ${products[i].Name}`);
//         console.log(`Price: ${products[i].Price}`);
//     }
//      else if(i == products.length - 1){
//         console.log('We could not find your category.')
//     }
// }

// //5.4
// let Providers = [['Phukienzero', 'Dientuccc'], ['Tgdd', 'Ddghn', 'VhStore'], ['Tgdd'], ['Tgdd']];
// for (let i = 0; i < products.length; i++) {
//     products[i].Providers = Providers[i];
//     console.log('-----------------------------------------');
//     console.log(`Name: ${products[i].Name}`);
//     console.log(`Price: ${products[i].Price}`);
//     console.log(`Providers: ${products[i].Providers}`);
// }

// //5.5.	
// let ans_provider = prompt('Enter provider');
// for (let i = 0; i < products.length; i++) {
//     for (let j = 0; j < products[i].Providers.length; j++) {
//         if(products[i].Providers[j] == ans_provider){
//             console.log('-----------------------------------------');
//             console.log(`position: ${prod ucts[i].position}`);
//             console.log(`Name: ${products[i].Name}`);
//             console.log(`Brand: ${products[i].Brand}`);
//             console.log(`Price: ${products[i].Price}`);
//             console.log(`Color: ${products[i].Color}`);
//             console.log(`Category: ${products[i].Category}`);
//             console.log(`Providers: ${products[i].Providers}`);
//         }
//         else if(i == products.length - 1 && j ==products[i].Providers.length - 1){
       
//             console.log('We could not find your providers.')
//                 }
//     }
// }
let phone = 
   [
	{
		Name:'Xiaomi portable charger 20000mah',
		Brand: 'Xiaomi',
		Price: '428',
		Color:['White','Blue','Black','Green','Yellow'] 
	},
        {
		Name:'VSmart Active 1',
		Brand: 'VSmart',
		Price: '5487',
		Color:['White','Black','Red','Yellow'] 
	},
        {
		Name:'IPhone X',
		Brand: 'Apple',
		Price: '21490',
		Color:['White','Pink','Gray','Green','Yellow'] 
	},
        {
		Name:'Samsung Galaxy A9',
		Brand: 'Samsung',
		Price: '8490',
		Color:['White','Blue','Black','Green','Yellow','Red'] 
	},
        {
        Name:'Samsung Galaxy j3',
        Brand: 'Samsung',
        Price: '5090',
        Color:['White','Blue'] 
    }
   ]
        