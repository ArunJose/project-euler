function smallestMult(n) {
  let numToCheck=n, found=false
  while(!isDivisible(numToCheck, n)){
    numToCheck++
  }
  return numToCheck
}

function isDivisible(numToCheck, oneToDivisor){
  for(let i=1;i<=oneToDivisor;i++){
    if(numToCheck%i!==0){
      return false
    }
  }
  return true
}
smallestMult(20)

/*
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

Test Cases:
smallestMult(5) should return a number.
smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.
*/
