




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
  

  let str = prompt ("enter a name")
  let v =str.length

  while (true) {

if (v > 15) {
console.log (" your name is too long");
continute
}
  console.log (" good username");
  break;
}

//let n;
//while (true) {
//n = Number (prompt("enter a number "));
//if (n) {
  //break;
//}
//}
//console.log (n)



