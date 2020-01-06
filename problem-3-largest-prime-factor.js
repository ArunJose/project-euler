function largestPrimeFactor(number) {
  for (let i = Math.ceil(Math.sqrt(number)) + 1; i > 2; i--) {
    if (number % i === 0 && isPrime(i)) {
      return i;
    }
  }
  return number;
}

function isPrime(number) {
  let isPrimeFlag = true;
  for (let i = 2; i <= number / 2; i++) {
    {
      if (number % i === 0) {
        isPrimeFlag = false;
        break;
      }
    }
  }
  return isPrimeFlag;
}

largestPrimeFactor(600851475143);

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFa ctor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/
