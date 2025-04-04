const villains = ["joker", "loki", "jerry"]

const heros = ["jackie", "Rambo", "tom"]

villains.push(heros)   // Array takes another array as an element 

// console.log(villains);
// console.log(villains[3][1]);

const allCharacters = villains.concat(heros)        // concat return a new array

//console.log(allCharacters);

const all_new_heros = [...villains, ...heros]       //using spread operator work same as concat
//console.log(all_new_heros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10]]]

//console.log(anotherArray[5][0]);
// const realAnotherArray = anotherArray.flat(10); 
// console.log(realAnotherArray);

// console.log(Array.isArray("zia"));             // checks for an array
// console.log(Array.from("zia"));                //convert the given string etc into an array



// console.log(Array.from({ name: "zia" }));        // this will not convvert this object into an array bcz we have to specify which one"key" or "value" of the object to convert into array?



let score1 = 34
let score2 = 56
let score3 = 88

console.log(Array.of(score1, score2, score3)); // converts given/specific values into an array
