// let arr = [1,1.2,"shrijit",[1,2,3]];

// array methods


// .concat to join two arrays
// .includes to search for Element
// .push to add
// .upshift to add in beginning
// .pop and .shift for remove
// .sort
// .slice to slice array 


// ----------------------------------------

// objects 

// const objectName = {
//     key : value,
//     key : value
// }

// objectName.property

// console.log(objectName.key)
//console.log(objectName['key'])

// to add new key
// objectName.newkey = value 

//----------------------------------

//fucntion declarations

// function hello(name){
//     // console.log(s);
//     console.log(`hello ${name}`)
// }
// hello("shrijit");


// function add(a,b){
//     return a+b;
// }

// console.log(add(1,2));


//function expression 

// const greetFunc = function greet(name){
//     console.log(`hello ${name}`);
// }

// greetFunc("shrijit");

// expression is same as function name 
//---------------------------------------------------------

//call back function

//when we provide function an argument to other function

// function callbackFunc(fn){
//     let n=10;
//     fn(10);
// }

// callbackFunc(
//     function(n){
//        console.log(n);
//     }
// )
 
// example 2 : 

// function greet(name,cb){
//     console.log(`hello ${name}`);
//     cb();
// }

// function cb(){
//     console.log("this is call back function");
// }

// greet("shrijit",cb);
    
            // or  

// greet("shrijit",function cb(){
//     console.log("this is call back function");
// })

// same thing 


//exercise 

// function showCallFunc(fn){
//     let n  = 10;
//     fn(10);
// }

// showCallFunc(function(n){
//     console.log(n);
// })

//-------------------------------------------

//object handling

// function greet(person){
//     return `Hello,my name is ${person.name}, i am ${person.work}.`;
// }

// const person1 = {
//     name : "shrijit",
//     work: "coder"
// }

// console.log(greet(person1))


//object containing functions

// function sayHello(){
//     return `Hello,my name is ${person2.name}, i am ${person2.work}.`;
// }

// const person2 = {
//     name : "shrijit",
//     work: "coder",
//     sayHello
// }

// console.log(person2.sayHello());

//-------------------------------------------------

//working with json file

// console.log(person1);   

//json.stringify(to convert json file to json)

// const jsonString = JSON.stringify(person1);
// console.log(jsonString);


//to revert back 
// const jsonObject  = JSON.parse(jsonString);

// console.log(jsonObject);

//--------------------------------------------------------------

// DATE & TIME

// const currentDate = new Date();
// // console.log(currentDate);

// //year 
// const year = currentDate.getFullYear();
// // console.log(year);

// //month
// const month = currentDate.getMonth();
// console.log(month);

// // day

// const day = currentDate.getDay();
// console.log(day)

//-----------------------------------------------------------

//set interval

// function will run after interval of miliseconds
// setInterval(()=>{
//     console.log("setInterval");
// },100)


//set timeout 

//to provide delay time in milliseconds

// setTimeout(()=>{
//     console.log("shrijit");
// },10000)


//use of both 

// const repeatName = setInterval(()=>{
//     console.log("shrijit");
// },1000);

// setTimeout(()=>{
//    clearInterval(repeatName);
// },10000)


//-------------------------------------------------------

