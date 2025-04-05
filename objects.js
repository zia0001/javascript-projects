//Two ways to create objects

//1: singletone  ===> Object.jsUser(through constructor)

//2:literal

const mySymbol = Symbol()

const jsUser = {

  name: "zia",
  "full name": "ziauddin",
  [mySymbol]: "mykey1",
  age: 23,
  location: "pakistan",
  email: "zia@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["wednesday", "friday"]

}

// console.log(jsUser.email, jsUser.lastLoginDays);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
//console.log(jsUser[mySymbol]);


jsUser.email = "zia@whatsapp.com"
//console.log(jsUser.email);


//Object.freeze(jsUser) // object cannot manupulate after freeze


jsUser.greeting = function () {
  console.log("Welcome to my company");

}

console.log(jsUser.greeting());

jsUser.greetingTwo = function () {
  console.log(`Welcome to my company, ${this["full name"]}`);

}

console.log(jsUser.greetingTwo());







