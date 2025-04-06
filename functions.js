function myName() {

  console.log("zia");

}

//myName()

function addTwoNumbers(num1, num2) {
  const sum = num1 + num2
  console.log(sum);
}


// addTwoNumbers(4, 0)   function calling


function addTwoNumbers(number1, number2) {
  const sum = number1 + number2
  return sum
}

result = addTwoNumbers(8, 9)
// console.log(result);


function loginMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return

  }
  return `${username} just logged in`
}

// console.log(loginMessage("subhan"));
// console.log(loginMessage());




