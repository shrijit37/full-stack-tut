//this keyword

// when used inside an arrow function of an object refers to window 
// when used inside an normal function of an object refers to object


//---------------------------------------------------------------------------

//factory function

// any function which return object 

// const createPerson = function (fname,lname,lang){
//     return {firstName : fname,
//     lastName : lname,
//     language : lang,
//     intro : function(){
//         console.log(`hello my name is ${this.firstName} ${this.lastName}. I speak ${this.language}.`);
//     }
// }
// }

// const shrijit = createPerson("shrijit","srivastav","english");

// console.log(shrijit.intro());

// const john = createPerson("john","doe","english");
// console.log(john.intro());

//------------------------------------------------------------------------------

// constuctor function 

//creates an object by default

// function CreatePerson(firstName,lastName,lang){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.lang = lang;
// }

// const shrijit = new CreatePerson("shrijit","srivastav","English");

// console.log(shrijit);

//Object.create methods

// let person = {
//     greet : function (){
//         console.log(`hello my name is ${this.firstName} ${this.lastName}`);
//     }
// }
// const shrijit = Object.create(person);
// person.firstName = "Shrijit";
// person.lastName = "Srivastav";

// shrijit.greet();













//prototype model

// Every javascript object has a anonymous property called prototype
// Remember functions & arrays are also a object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] Object
// -> which means a object will inherit all properties of Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways:
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)

// ********* Checking the Prototype
// const obj = {};
// console.log(obj.__proto__.__proto__);

// const arr = new Array();
// console.log(arr.__proto__.__proto__.__proto__);

// const str = new String();
// console.log(str.__proto__.__proto__.__proto__);

// function Person(firstName, lastName, pl) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.pl = pl;
//   }
  
//   const huxn = new Person("HuXn", "WebDev", "JavaScript");
//   console.log(huxn);
//   console.log(huxn.__proto__);
//   console.log(huxn.__proto__.__proto__);
//   console.log(huxn.__proto__.__proto__.__proto__);
  
  // -------------------------------
  // ********* Changing the Built-in Methods
  // console.log(Array.prototype);
  // Array.prototype.pop = function () {
  //   return "POP IT UP BABE";
  // };
  
  // const myArr = ["one", "two", "three"];
  // console.log(myArr.pop()); // POP IT UP BABE
  // -------------------------------
  
  // -------------------------------
  // ********* We can define our own method as well
  // String.prototype.hello = function () {
  //   console.log(this);
  //   console.log(this.toUpperCase());
  // };
  
  // console.log("this is a string".hello()); // Uppercase : THIS IS A STRING
  // -------------------------------





//=======================================================

//Classes in javascript

// class Person {
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.info = function(){
//             return `My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old.`
//         }
//     }

//     //prototype members 

//     greet(){
//         console.log(`hello ${this.firstName} ${this.lastName}`);
//     }
// }

// // const shrijit = new Person("shrijit","srivastav",21);

// // console.log(shrijit.info());
// // shrijit.greet();

// class Programmer extends Person{
//     constructor(firstName,lastName,age,lang,exp){
//         super(firstName,lastName,age); //copy data from from parent class
//         this.lang = lang;
//         this.exp = exp;
//         this.info = function(){
//             return `My name is ${this.firstName} ${this.lastName}, i am ${this.age} years old.I code in ${this.lang},i have exp of ${this.exp} years.`
//         }
//     }
// }

// const shrijit = new Programmer("shrijit","srivastav",21,"javascript","1");

// console.log(shrijit.info());

//----------------------------------------------------------------------------------------------------------------------------------

//async function

//code will not run in sequence

// console.log("start");

// setTimeout(()=>{
//     console.log("inside");
// },2000);

// console.log("end");

//-------------------------------------------------------------------------------------

//promise

// new Promise( (res,rej)=> {});

// function checkNumber(number){
//     return new Promise((res,rej) =>{
//         if(number % 2 === 0) res("number is even");
//         else rej("number is odd")
//     })
// //if promise is resolved
// checkNumber(8).then((message)=>{
//     console.log(message);
// })

// //if rejected
// checkNumber(3).catch((message)=>{
//     console.log(message);
// })



// also correct
// function checkNumber(number){
//     return new Promise((res,rej) =>{
//         if(number % 2 === 0) res("number is even");
//         else rej("number is odd")
//     }).then((msg) => console.log(msg)).catch((msg)=>console.log(msg));
// }

// checkNumber(7);

//------------------------------------------------------------------------------------------

// function fetchDataFromServer() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("User data retrieved from the server.");
//       }, 2000);
//     });
//   }
  
//   async function getUserData() {
//     try {
//       const data = await fetchDataFromServer();
//       console.log(data);
//       console.log("Remaining tasks can be executed here.");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   getUserData();


//--------------------------------------------------------------------------

//fetch api 

// const data = fetch("./text.txt").then((res)=>{
//     return res.text();
// }).catch((error) => {
//     console.log(error);
// }).then((data)=>{
//     console.log(data);
// })

const result = document.querySelector(".result");

// async function readData() {
//   try {
//     const response = await fetch("text.txt");
//     if (!response.ok) throw Error(response.statusText);
//     const data = await response.text();
//     result.textContent = data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// readData();


//reading json file 

// async function readJson(){
//      try{
//         const response  = await fetch("data.json");
//         if(!response.ok) throw Error(response.statusText);
//         const data = await response.json();
//         console.log(data);
//      }
//      catch(error){
//         console.log(error);
//      }
// }

// readJson();

//------------------------------------------------------

//external api

// function callApi(){
//     fetch("https://jsonplaceholder.typicode.com/posts/").then((res)=>{
//         if(!res.ok) new Error(res.statusText);
//        return res.json();   
//     }).catch((error)=>{
//         console.log(error);
//     })
//     .then((data)=>{
//         // data.forEach(element => {
//         //     console.log(element.title);
//         // });
//         console.log(data);
//     })
// }

// callApi();

//------------------------------------------------------------------

