function nthPrime(n) {
  let numToCheck=1, noOfPrimes=0;
  while(noOfPrimes<=n){
    if(isPrime(numToCheck)){
      noOfPrimes++
    }
    numToCheck++
  }
  return --numToCheck
}

function isPrime(n){
  for(let i=Math.floor(Math.sqrt(n));i>=2;i--){
    if(n%i==0){
      return false
    }
  }
  return true
}

console.log(nthPrime(10))

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

Tests:
nthPrime(6) should return 13.
nthPrime(10) should return 29.
nthPrime(100) should return 541.
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743.
*/
