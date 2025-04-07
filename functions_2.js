function calculateCartPrice(...totalPrice) {          // Rest operator is used here to collect multiple elements into an array i.e totalPrice
  return totalPrice
}


const total = calculateCartPrice(567, 768, 564)
//console.log(total);



const user = {
  username: "zia",
  id: "z87ytln"
}

function handleObjects(anyObject) {
  console.log(`Username is ${anyObject.username} and id is ${anyObject.id}`);

}

//const users = handleObjects(user)

//console.log(users);



const array1 = [300, 545, 877, 549]

function returnThirdValue(getArray) {
  return getArray[2]
}

//console.log(returnThirdValue(array1));



//***************** Nested Scope

function one() {
  const userName = "zia"

  function two() {
    const education = "bachelors"
    console.log(`username is ${userName}`);
  }

  //console.log(`your education is ${education}`);

  two()
}

//one()


if (true) {
  const userName = "ziauddin"
  if (userName === "ziauddin") {
    const university = "Comsats"
    console.log(userName + university);

  }
  //console.log(university);

}
//console.log(userName);


//********************** function hoisting

console.log(addOne(10));
function addOne(number) {
  return number + 1
}

//********************** function expression

console.log(addTwo(6));
const addTwo = function (number) {

  return number + 2
}





