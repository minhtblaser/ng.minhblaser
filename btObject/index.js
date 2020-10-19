
// bt4
// let dict = {
//     debug: "the process of figuring out why your program has a certain a error",
//     done: "when your task is complete",
//     defect: "the formal word for error",
//     pm: "the short version of project",
//     ui: "UI means Users Interface",
// }

// alert ("hi there, this is new dictionary")
// let keyWord = prompt("enter a key word")

// while (true) {
// let keyWord = prompt("enter a key word")
// let count = 0;
//     for (let x in dict) {
//     if (x == keyWord) {
//         alert (keyWord + "\n" + dict[x])
//         count++
//         break;
//     }
// }

// if (count == 0) {
//     let newWord = prompt ("we could not find your" + keyWord + ", explanation please")
//     dict[keyWord] =newWord;
//     alert ("done")

// }
// }

let product = [ 
{
    Name: 'Xiaomi portable charger 20000mah',
    Brand: 'Xiaomi',
    Price: '428',
    Color: 'White',
    Category: 'Charger',
},
{
    Name: 'VSmart Active 1',
    Brand: 'Xiaomi',
    Price: '5487',
    Color: 'Black',
    Category: 'Phone',
},
{
    Name: 'IPhone X',
    Brand: 'Apple',
    Price: '21490',
    Color: 'Gray',
    Category: 'Phone',
},
{
    Name: 'Samsung Galaxy A9',
    Brand: 'Samsung',
    Price: '8490',
    Color: 'Blue',
    Category: 'Phone',
},
]



for (let i = 0; i < product.length; i++){
    console.log(`#${i+1} Name: ${product[i].Name} \nPrice: ${product[i].Price} \n`)
}


let position = Number (prompt ("enter production"))

for (let x in product[position-1]) {
    console.log(`${x}: ${product[position-1][x]}`)
}

while(true){
    let cate = prompt("Enter your category?")
    for (let i = 0; i<product.length; i++){
        if(product[i].Category == cate){
            console.log(`Name: ${product[i].Name} \nPrice: ${product[i].Price} `)
        }
    }
}


















// let person = {
//     name:"minh",
//     age: 20,
//     role: "student"
// } 

// let newCreate = prompt ("enter your new thing")
// person[newCreate]=prompt("yout explanation")
// console.log (person)

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


