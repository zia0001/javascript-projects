// //table

// let table = ''
// for (let number = 1; number <= 10; number++) {
//   table += console.log(`2 * ${number} = ${2 * number}`);
// }
// console.log(table);

// //even numbers

// for (let num = 2; num <= 100; num += 2) {
//   console.log(num);

// }

// //odd numbers

// for (let num = 1; num <= 10; num += 2) {
//   console.log(num);
// }

// prime number
for (let num = 2; num <= 20; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`prime numbers are ${num} `);

  }
}

//function to find prime number

function isPrime(value) {
  for (let num = 2; num <= value; num++) {
    let isPrime = true;
    for (let i = 2; i < value; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`YES ${num} is a prime number`);

    }
  }
}

isPrime(5)