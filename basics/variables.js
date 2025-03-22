const accountId = 1122
let accountEmail = "zia@google.com"
var accountPassword = "zia123"
accountCity = "wah Cant"
let accountState;

// accountId = 2233  // not allowed const cannot be changed
// prefer not to use var because of issue in block scope and functional scope

accountEmail = "zia@gmail.com"
accountPassword = "14567"
accountCity = "taxila"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
