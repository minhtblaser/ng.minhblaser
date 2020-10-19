// let array = [[0, 2, 3, 4, 5], [0, 1], [0, 6], [1, 9, 8, 7, 10], [10, 11], [11, 12], [12, 13]]

// console.log([[0, 2, 3, 4, 5], [0, 1], [0, 6], [1, 9, 8, 7, 10], [10, 11], [11, 12], [12, 13]])
// let F1 = []
// let F2 = []
// let F3 = []
// let F4 = []
// function covid19(arr) {

//     for (let i = arr.length - 1; i > -1; i--) {
//         if (arr[i].indexOf(0) > -1) {
//             arr[i].splice(arr[i].indexOf(0), 1)
//             for (let j = arr[i].length - 1; j >= 0; j--) {
//                 F1.push(arr[i][j])
//             }
//             arr.splice(i, 1)
//         }
//         for (j = 0; j < F1.length; j++) {
//             for (let jj = F2.length - 1; jj > j; jj--) {
//                 if (F1[j] == F1[jj]) {
//                     F1.splice(jj, 1)///xoa phan tu giong nhau
//                 }
//             }
//         }
//     }
//     //---------------------------F1 done -----------------------------------
//     for (i = arr.length - 1; i > -1; i--) {
//         for (j = 0; j < F1.length; j++) {
//             if (arr[i].indexOf(F1[j]) > -1) {
//                 for (jj = 0; jj < arr[i].length; jj++) {
//                     F2.push(arr[i][jj])
//                     //arr[i].splice(jj,1)
//                 }
//                 arr.splice(i, 1)
//             }
//         }
//     }
//     for (i = F2.length - 1; i > -1; i--) {
//         for (j = 0; j < F1.length; j++) {
//             if (F2[i] == F1[j]) {
//                 F2.splice(i, 1)// Xoa phan tu cua F khac
//             }
//         }
//     }
//     for (j = 0; j < F2.length; j++) {
//         for (let jj = F2.length - 1; jj > j; jj--) {
//             if (F2[j] == F2[jj]) {
//                 F2.splice(jj, 1)///xoa phan tu giong nhau
//             }
//         }
//     }
//     //----------------------------F2 done ---------------------------------------
//     for (i = arr.length - 1; i > -1; i--) {
//         for (j = 0; j < F2.length; j++) {
//             if (arr[i].indexOf(F2[j]) > -1) {
//                 for (jj = 0; jj < arr[i].length; jj++) {
//                     F3.push(arr[i][jj])
//                 }
//                 arr.splice(i, 1)
//             }
//         }
//     }
//     for (i = F3.length - 1; i > -1; i--) {
//         for (j = 0; j < F2.length; j++) {
//             if (F3[i] == F2[j]) {
//                 F3.splice(i, 1)// Xoa phan tu cua F khac
//             }
//         }
//     }
//     for (j = 0; j < F3.length; j++) {
//         for (let jj = F3.length - 1; jj > j; jj--) {
//             if (F3[j] == F3[jj]) {
//                 F3.splice(jj, 1)///xoa phan tu giong nhau
//             }
//         }
//     }
//     //----------------------------F3 done-------------------------------------
//     for (i = arr.length - 1; i > -1; i--) {
//         for (j = 0; j < F3.length; j++) {
//             if (arr[i].indexOf(F3[j]) > -1) {
//                 for (jj = 0; jj < arr[i].length; jj++) {
//                     F4.push(arr[i][jj])
//                 }
//                 arr.splice(i, 1)
//             }
//         }
//     }
//     for (i = F4.length - 1; i > -1; i--) {
//         for (j = 0; j < F3.length; j++) {
//             if (F4[i] == F3[j]) {
//                 F4.splice(i, 1)// Xoa phan tu cua F khac
//             }
//         }
//     }
//     for (j = 0; j < F4.length; j++) {
//         for (let jj = F4.length - 1; jj > j; jj--) {
//             if (F4[j] == F4[jj]) {
//                 F4.splice(jj, 1)///xoa phan tu giong nhau
//             }
//         }
//     }
// }
// covid19(array)
// console.log(array)
// console.log(F1)
// console.log(F2)
// console.log(F3)
// console.log(F4)
// ------------------------------------------------------------

// function saleMerchandise(a, b) {
//     let res = []
//     for(let i = 0 ; i<b.length ; i++){
//         let count = 0
//         for(let j= 0 ; j<a.length ; j ++){
//             if(b[i]==a[j]){
//                 count += 1
//             }
//         }
//         console.log(count)  // 0 0 1 1 2
//         if(count%2==0){
//             res.push(count/2)
//             console.log (res)
//         }    
//         else {res.push(Math.floor(count/2))}
//         console.log(res)
//     }
    
//     return res
// }

// socks = [1, 2, 3, 1, 2, 4];
// sizes = [1, 2, 4]
// console.log(saleMerchandise(socks, sizes))

// function whoWouldWin(cat_a, mouse, cat_b) {
//     let distanceA = cat_a - mouse
//     let distanceB = cat_b - mouse

//     if (distanceA < 0) {
//         distanceA = -distanceA
//     }
//     if (distanceB < 0) {
//         distanceB = -distanceB
//     }
//     if (distanceA < distanceB) {
//         return "Cat A"
//     }
//     else if (distanceA > distanceB) {
//         return "Cat B"
//     }
//     else return "Mouse has escaped"
// }
// let a =Number(prompt("Cat a"))
// let b =Number(prompt("Mouse"))
// let c= Number(prompt("Cat b"))
// alert(whoWouldWin(a,b,c))


// function saleMarchendise(socks, sizes) {
//     let saleable = []
//     for (let i = 0; i < sizes.length; i++) {
//         let count = 0
//         for (let j = 0; j < socks.length; j++) {
//             if (sizes[i] == socks[j]) {
//                 count += 1
//                 console.log(count)
//             }
//         }
//         if (count % 2 != 0) {
//             saleable.push((count - 1) / 2)
//         }
//         else saleable.push(count / 2)
//     }
//     return saleable
// }
// let sock = [1, 2, 3, 4, 1, 2]
// let size = [1, 2, 4]
// console.log(saleMarchendise(sock, size))



// function saleSocket(sock, size) {
//     let res = []
//     for (let i= 0; i < size.length; i++ ) {
//             let count  = 0
//             for (let j=0; j< sock.length; j++) {
//                 if (size[i] == sock[j]) {
//                     count+= 1
//                     // console.log(count)
//                 }
//             }
//     if (count  % 2 != 0) {
//         res.push((count-1)/2)
//     }
//     else res.push(count / 2)
//     }
//     return res
// }
// let socks = [1, 2, 3, 4, 1, 2]
// let sizes = [1, 2, 4]
// console.log(saleSocket(socks, sizes))


// function factorialDivisible(n) {
//     let L = 1
//     for (let i = 1; i < n; i++) {
//         L = L * i
//     }
//     L = L + 1
//     if (L % n == 0) {
//         return ` Chia het cho ${n}`
//     }
//     else return `Khong chia het cho ${n}`
// }

// console.log(factorialDivisible(5))

// function solve(n) {
//     let k = 2;
//     let sum = 0;
//     while ( n > 1) {
//         while (n % k == 0){
//             sum+=k;
//             n/=k;
//             console.log(k)
//             console.log (n)
//         }
//         // console.log(sum)
//         k++;
//     }
//     console.log(sum)
//     return sum;
// }

// function factorSum (n) {
//     while (n != solve(n))
//         n = solve (n);
//         return n;
// }

// console.log (solve(24))
// console.log (factorSum(24))

let arr= [1001];
// let inputnumber = Number (prompt("enter a number"))
function snt (n) {
    for (let  i=2 ; i <=n; i++)
        arr[i]=1;
        console.log(arr)
        arr[0]=arr[1]=0;
        // console.log(arr)
    for  (let i =2; i<=Math.sqrt(n); i++)
    if (arr[i])
        for (let j=2*i; j <=n; j += i)
            arr[j]=0
}
let number = Number(prompt("enter the number 1: "))
let number1 = Number (prompt("enter the number 2: "))
function greatCommonPrimeDivisor (a,b) {
    snt(Math.min(a, b));
    let d = 0;
    for (let i= Math.min(a,b); i>=2; i--)
        if (arr[i] && a %i == 0 && b%i == 0) {
            return i;
                    }
                return -1 
                }
snt(20);
greatCommonPrimeDivisor(number, number1)
console.log(greatCommonPrimeDivisor(number, number1))
