// let phone = 
//    [
// 	{
// 		Name:'Xiaomi portable charger 20000mah',
// 		Brand: 'Xiaomi',
// 		Price: '428',
// 		Color:['White','Blue','Black','Green','Yellow'] 
// 	},
//         {
// 		Name:'VSmart Active 1',
// 		Brand: 'VSmart',
// 		Price: '5487',
// 		Color:['White','Black','Red','Yellow'] 
// 	},
//         {
// 		Name:'IPhone X',
// 		Brand: 'Apple',
// 		Price: '21490',
// 		Color:['White','Pink','Gray','Green','Yellow'] 
// 	},
//         {
// 		Name:'Samsung Galaxy A9',
// 		Brand: 'Samsung',
// 		Price: '8490',
// 		Color:['White','Blue','Black','Green','Yellow','Red'] 
// 	},
//         {
//         Name:'Samsung Galaxy j3',
//         Brand: 'Samsung',
//         Price: '5090',
//         Color:['White','Blue'] 
//     }
//    ]
    
//     let step1=prompt("Hello, who are you? Please enter a number as below \n 1.Customer \n 2.Admin \n 3.Cancel")
//     if  (step1==2) {
//         alert ("welcome to admin!! \n what do you want? \n 1.add new phone \n 2.delete phone \n 3.update the price's phone \n ")  
//             let answer =  (prompt ("enter your number"))
//                 if (answer == 1) {
//                     let answer1 = prompt ("please add the new brand phone")
//                     let answer2 = prompt ("name")
//                     let answer3 = Number (prompt ("price"))
//                     let answer4 = prompt ('color')
//                         phone.Brand= answer1
//                         phone.Name= answer2
//                         phone.Price= answer3
//                         phone.Color= answer4
//         alert ("done, your process is completed")
//     console.log (phone.Brand + "\n" +phone.Name+ "\n"  + phone.Price+ "\n" + phone.Color)
//                 }
//     else if (answer == 2 ) {
//         for (let i = 0; i < phone.length; i++) {
//     console.log(`---------------------------------------- \n ${phone[i].Name} \n ${phone[i].Brand}`)
// }
//         alert ("please choice your phone to delete!!!!!")
    
//         let answer5 = prompt("Enter position:")
//         phone.splice(answer5-1,1)
    
//     for (let i = 0; i<phone.length; i++){
//         console.log(`${i+1}. ${phone[i].Name}  ${phone[i].Brand}\n`)
//         }
//     }
//     alert ("done") }
//     else if (answer == 3) {
//         for (let i = 0; i < phone.length; i++) {
//             console.log(`---------------------------------------- \n ${phone[i].Price} \n ${phone[i].Brand}`)
//         }
//         alert ("please choice your phone to update the phone's price!!!!!")
//     let answer6 = prompt("Enter position:")
//     let newPrice = prompt("Enter new  price")
//     phone[answer6-1].Price = newPrice
//     }
//     for (let i = 0; i<phone.length; i++){
//         console.log(`${i+1}. ${phone[i].Name} \n  ${phone[i].Price}\n`)
//     }
//     alert ("done")

//  if (step1 ==3) {
//     alert ("good night")
// }

// const phone = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white' 
// }
// for (let x in phone) {
//     console.log (x + ":" + phone[x]);
// }

// const task = {
//     subject: "dwdw",
//     create: "scsds",
//     assign: 'wwff',
//     due: '2019=229302',
//     expect: "0.5"
// }

// let {subject, create, assign, due, expect  } = task;
// console.log (subject);
// console.log(assign );
// console.log  (due)

//4
// let dict = {
//   debug: "The process of figuring out why your program has a certain error and how to fix it",
//   done: " when your task is complete, the only thing you have to do is to wait for usesers to use it (no additional codes or actions needed",
//   defect: " the formal word for error",
//   pm: " the short version of project manager, the person in charge of the final result of a project",
//   uiux: "Ui means User Interface, UX mean User Experience, are the process to define how your phones looks and feels",    
// }
// alert('Hi there, this is a new dictionary.');

// while (true) {
//     let answer = prompt ("please enter your wordsearch")
//     let count = 0
//     for (let x in dict ) {
//         if (x == answer) {
//             alert (answer+  "\n" +dict[x] );
//             count ++
//             break
//     }
// }
//          if ( count == 0) {
//             alert ("we could not find your word")
//             let explanation = prompt (" we could not find your word, please leave your explanation")
//             dict[answer]= explanation
//         alert ("done")        
//         }
//     }


//5
let phone = 
   [
	{   
        Position: 1,
		Name:'Xiaomi portable charger 20000mah',
		Brand: 'Xiaomi',
		Price: '428',
        Color:['White','Blue','Black','Green','Yellow'],
        Category: 'Charger', 
	},
        {
        Position: 2,    
		Name:'VSmart Active 1',
		Brand: 'VSmart',
		Price: '5487',
        Color:['White','Black','Red','Yellow'],
        Category: 'Phone',
	},
        {
        Position: 3,
		Name:'IPhone X',
		Brand: 'Apple',
		Price: '21490',
        Color:['White','Pink','Gray','Green','Yellow'],
        Category: 'Phone',
	},
        {
        Position: 4,    
		Name:'Samsung Galaxy A9',
		Brand: 'Samsung',
		Price: '8490',
        Color:['White','Blue','Black','Green','Yellow','Red'],
        Category: 'Phone',
	},
        {
        Position: 5,
        Name:'Samsung Galaxy j3',
        Brand: 'Samsung',
        Price: '5090',
        Color:['White','Blue'],
        Category: 'Phone',
    }
   ]
   let Providers = [['Phukienzero', 'Dientuccc'], ['Tgdd', 'Ddghn', 'VhStore'], ['Tgdd'], ['Tgdd']];
//    let phoneArr = []
// for (let i=0 ;  i<phone.length; i++) {
//     phoneArr.push[i]
//     console.log(phone[i].Brand + " :" + phone[i].Name)
// }

// for (let i = 0; i < phone.length; i++){
//         console.log(`--------------------------------\nName: ${phone[i].Name} \nPrice: ${phone[i].Price}} `)
//     }

// let position = Number (prompt("please choice your position"))
//     for (let x in phone[position-1]) {
//             console.log ( x  + phone[position-1][x])
//         }
// while (true) {
// let cate = prompt ("enter your category ??")
//         for (let i = 0; i < phone.length; i++){
//             if (phone[i].Category == cate) {
//                 console.log (phone[i].Brand + '\n'+ phone[i].Price + '\n' + phone[i].Color)

//          }
//     }
// }

// for (let i = 0; i <phone.length; i++) {
//     phone[i].Providers = Providers[i]
//     console.log('-----------------------------------------');
//     console.log (phone[i].Brand + '\n'+ phone[i].Price + '\n' + phone[i].Color)
//     console.log (phone[i].Providers)
// }

// while(true){
//     let prov = prompt("Enter your provider?")
//     for (let i = 0; i<phone.length; i++){
//         for (let j = 0; j<=phone[i].Providers.length; j++){
//             if (phone[i].Providers[j]==prov){
//                console.log(`Name: ${phone[i].Name} \nPrice: ${phone[i].Price} `)
//             }
//         }
//     }
// }
