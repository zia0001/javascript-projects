let Name = "zia"

if(Name){
  //console.log(Name);
  
}


const emptyArray = []

if(emptyArray.length === 0){
  console.log("Array is empty");
}


const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
  console.log("Object is empty");
  
}


// Nullish coalescing Operator(??)

let val1 = 4 ?? 8  
let val2 = null ?? 9   // work as OR (||) operator

console.log(val1);
console.log(val2);

