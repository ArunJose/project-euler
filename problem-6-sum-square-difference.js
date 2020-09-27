function sumSquareDifference(n) {
  return squareOfSum(n)-sumOfSquares(n)
}

function sumOfSquares(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i*i
  }
  return sum
}

function squareOfSum(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum+=i
  }
  return sum*sum
}

console.log(sumSquareDifference(20))

/*
Project Euler: Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

Tests:
sumSquareDifference(10) should return a number.
sumSquareDifference(10) should return 2640.
sumSquareDifference(20) should return 41230.
sumSquareDifference(100) should return 25164150.
*/
