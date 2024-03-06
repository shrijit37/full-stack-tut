to print text with new line 

console.log(`
hello 
my
name is
`)



arrow function

function greet(name){
    console.log(`hello ${name}`);
}

greet('shrijit')
        to

const greet = (name) => {
    console.log(`hello ${name}`);
};

greet('shrijit');


================================================================

Enhanced object literal (function - > object)


function user(name,age,work){
    return {
        name,
        age,
        work
    }
}

console.log(user("shrijit",20,"coder"))

--------------------------------

default parameter to a function

function printName(flag=false){
    if(flag === true){
        console.log("shrijit");
    }
    else{
        console.log("no-name");
    }
}

you dont have to provide parameter in all cases
printName();

----------------------------------------

spread opertor (...)


//using with function

function number(a,b,c,d){
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
}

const color = ["red","green","yellow","orange"];

// number(color);

//to separte each value of array
number(...color)


for array 


num = [1,2,3];
moreNum = [4,5,6];

//to join both array 

const concat = [...num,...moreNum];

console.log(concat);


for object


const obj1 = {x:1,y:2};
const obj2 = {z:5}
const obj3 = {...obj1,...obj2,a:3};
console.log(obj3)

---------------------------------------------------------------

rest operator(...)

help to intake multiple parameter in a function in the form of array


function printAll(...userdata) {
    console.log(userdata);
}
must always be the last parameter


function printAll(name, ...userdata){
    console.log(name); // in name variable  
    console.log(userdata);  // in array
}

printAll("shrijit",20,"programmer")


-----------------------------------------------------------------------------

destructuring 

easier way to store values of array and object in variables 


using with arrays 

const fruits = ["apple","orange","banana","guaua"];

const [one,two,,four] = fruits;

console.log(one);
console.log(two)
console.log(four);


using with function

function ret(){
    return [2,5];
}
const [two,five] = ret();
console.log(two);
console.log(five);


assigning rest of item to single varible

const fruits = ["orange","apple","banana","guaua"];

const [fav, ...okish] = fruits;

console.log(okish);


object destructuring

const student = {
    name : "shrijit",
    postion : "last",
    rollNo : "34"
}

const {name,...info} = student;

console.log(name,info );

nested destructuring

const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };
  

// Extracting data using object destructuring
const {
    user: {
      name,
      age,
      address: { city, country },
      hobbies,
      scores: { math, science, history },
      email,
    },
    products: [product1, product2, product3],
    settings: {
      darkMode,
      notifications: {
        email: emailNotifications,
        sms: smsNotifications,
        push: pushNotifications,
      },
      language,
    },
  } = data;


------------------------------------------------------------------

ternary operator 

condition ? true : false;


function checkEven(n){
    return n%2===0 ? true : false;
}

console.log(checkEven(5));

---------------------------------------------------------------------

for in loops

for (let key in object) { }


const student = {
    name : "shrijit",
    postion : "last",
    rollNo : "34"
}
 

for(let key in student){
    console.log(key,student[key]);
}


const fruits = ['apple', 'orange', 'banana', 'guava'];

for(let index in fruits){
    console.log(fruits[index]);
}

------------------------------------------------------------------------------

for of loops

for(variable of iterable) { }

const fruits = ['apple', 'orange', 'banana', 'guava'];

for(let fruit of fruits){
    console.log(fruit);
}

-------------------------------------------------------------------------------

for -  each loop

take function as parameter and perform operation on each single element

const fruits = ['apple', 'orange', 'banana', 'guava'];

fruits.forEach((fruit)=>{
    console.log(fruit);
});

const num = [1,2,3,4,5];

let sum = 0;

num.forEach((value)=>{
    sum+=value;
})

console.log(sum);


----------------------------------------------------------------------------------
map
doesnt modify the same array instead give a new array 
requires return in callback function

const num = [1,2,3,4,5];

const sqr = num.map((val) =>{
    return val*val
})

console.log(sqr);


------------------------------------------------------------------------------------
filter method

filters element based on specified criteria
return return in callback function

const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just Like You", singer: "NF", duration: 3.23 },
  { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
];

const goodSongs = songs.filter((value)=>{
    return value.duration >3;
})


console.log(goodSongs)

const ages = [32, 33, 16, 40];

const adults = ages.filter((age)=>{
    return age>=18;
})
console.log(adults);

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

const longWords = words.filter((value)=>value.length>=6);
console.log(longWords);


------------------------------------------------------------------------

find

const peoples = [
    { name: "huxn", age: 17 },
    { name: "john", age: 18 },
    { name: "alex", age: 20 },
    { name: "jimmy", age: 30 },
    { name: "alex", age: 30 },
  ];


const person = peoples.find((value)=>{
    if(value.name === "alex") return value.name;
})

console.log(person);

const posts = [
    { id: 1, content: "Good Post" },
    { id: 2, content: "funny Post" },
    { id: 3, content: "sad Post" },
  ];

const findPost = posts.find((value)=>{
    return value.content==="funny Post";
  })

 console.log(findPost);

------------------------------------------------------------

every method 

every element passes the condtion in the callback function 

const ages = [32, 3, 16, 40];

const check  = ages.every((value)=>{
    return value>10;
})
console.log(check);


//some method

const checksome  = ages.some((value)=>{
    return value>10;
})
console.log(checksome);


------------------------------------------------------------------------

map data structure

const map = new Map();
const key1 = "shrijit";
const key2 = {};
const key3 = function(){

};

map.set(key1, "this is key 1");
map.set(key2, "this is key 2");
map.set(key3, "this is key 3");
console.log(map);

console.log(map.keys());
console.log(map.values());
map.delete(key1);
console.log(map);

iteration 

for(let [key,value] of map){
    console.log(`${key} -- ${value}`);
}

for(let key of map.keys()){
    console.log(key);
}

for(let values of map.values()){
    console.log(values);
}

-------------------------------------------------------------------

sets

only consist of uniqui values 

const num = [1,2,3,4,5,5,6];
const set = new Set(num);

console.log(set);

set.add(7);

set.has(4);// to check if value is present or not

console.log(set.has(4));

set.delete(3);

to delete every thing

set.clear();

for(let item of set){
    console.log(item);
}