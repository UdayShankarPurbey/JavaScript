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