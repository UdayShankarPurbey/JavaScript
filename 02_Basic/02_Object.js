const  mySym = Symbol('key1');
const mySym2 = Symbol('key2');

const user = {
    name: "Uday",
    "Full Name": "UdayKumarPurbey",
    age: 18,
    location : "San Francisco",
    email : "user@example.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday" , "Thursday"],
    [mySym] : "value1", // correct way to define symbols in object
    mySym2 : "value2",
}

console.log(user.name);
console.log(user["location"]);
console.log(user["Full Name"]);
console.log(user[mySym]); // to access symbol
console.log(user.mySym2);
console.log(user);

user.email = "user@chatgpt.com";
// Object.freeze(user)
user.email = "user@goofle.com"; // not changed beacuse objuct is freezed.
console.log(user);

user.greeting = function() {
    console.log("Hey Js User!");
}

user.greetingUser = function() {
    console.log(`Hey Js User! ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingUser());


const regularUser = {
   email : "admin@example.com",
   fullName : {
    userFullName : {
        firstName : "John",
        lastName : "Chaudhary",
    }
   }
}

console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {
    1 : "a",
    2 : "b",
}

const obj2 = {
    3 : "z",
    4 : "y",
}
const obj3 = {
    5 : "o",
    6 : "n",
}

// const obj4 = Object.assign({}, obj1, obj2 , obj3)
// console.log(obj4);

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);

const userData = [
    {
        name : "John",
        age : 18,
        location : "San Francisco",
        email : "user@example.com",
        isLoggedIn : false,
    },
    {
        name : "Baibhavi",
        age : 34,
        location : "Tokoyo",
        email : "baibhavi@comp.com",
        isLoggedIn : true,
    },
    {
        name : "raushan",
        age : 27,
        location : "Banaras",
        email : "raushan@rdone.com",
        isLoggedIn : false,
    },
    {
        name : "Abhinav",
        age : 16,
        location : "London",
        email : "abhi@mick.com",
    }
]

const tinderUser = {}

tinderUser.id = "fjkd232"
tinderUser.name = "John"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));

const course = {
    name : "JavaScript",
    author : "Udacity",
    price : 9999,
}

const {name : Teacher , author  } = course;
console.log( Teacher , author);
