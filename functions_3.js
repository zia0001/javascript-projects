const user = {
  username: "zia",
  regno: "Sp23-bse-010",

  welcomeMessage: function () {
    console.log(`${this.username} , registered successfully`)
    //console.log(this);    'this' this give current context i.e the current whole object

  }
}


// user.welcomeMessage()
// user.username = "haseeb"
// user.welcomeMessage()

//console.log(this);      // 'this' is inside node environment here thats why this will give an empty object



const device = () => {
  let devicename = "thermometer"

  console.log(this.devicename);         //'this' cannot be use inside a function

}

//device()


//********* ARROW function */


const addTwo = (num1, num2) => {
  const result = num1 + num2
  console.log(result);

  return result


}

//addTwo(5, 7)

const addThree = (num1, num2, num3) => (num1 + num2 + num3)       // implicit arrow function return used in React most


const userAge = (userage) => ({ userage: "24" })

//console.log(userAge);



