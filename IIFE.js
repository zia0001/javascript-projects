// Immediate Invoke Function Expression

(function serverConnection() {
  console.log("Server connected successfully");


}
)();                      // this semicolon is must to write in order to write multiple IIFE functions
//serverConnection()      // no need to call in IIFE 



((...fullname) => {

  console.log(`user is ${fullname}`);

}
)("zia", "uddin")

