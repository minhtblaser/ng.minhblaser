// question2
// let a = "hello beauty there"
// let array = a.split (" ")
// console.log (array)

//question3
// let a = [1,2,4,5]
// console.log (...a)


let a = prompt ("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)")
let b = ["the current  item are:" + "\n" + "jeans" + "\n" + "Tshirt" + "\n" + "sock"]
while (true) {
    if (b == "C") {
    let create = prompt ("please enter the name of the item")
    a.push(create)
    alert ("done")
}
else if ( a == " R") {
    let result = " "
    for (let i = 0; i < b.length; i++) {
        result = result + (i+1 + " . " + b[i] + "\n")
    }
    alert ('the current item are: \n' + result )
}
else if (a = "U") {
    let position = Number (prompt("enter the position to update"))
    let newName= prompt ("Enter the new name")
    b[position-1]= newName
    alert ("done") 
}
else if (a == "d"){
            let position_Delete = Number(prompt("Enter the position you want to delete"))
            b.splice(position_Delete-1,1)
            alert("Done")
        }
        else {
            alert("This command is not supported")
        }
        method = prompt("Hi there, welcome to shop admin, what do you want (C, R, U, D)?")
    }