function largestPalindromeProduct(n) {
  const maxNum = Math.pow(10, n);
  let prod = 0;
  for (let i = maxNum - Math.ceil(Math.sqrt(maxNum)); i < maxNum; i++) {
    for (let j = 1; j < maxNum; j++) {
      if ((isPaliandrome(i * j)) && (prod < i * j)) {
        prod = i * j
      }
    }
  }
  return prod;
}

function isPaliandrome(originalNum) {
  let rev = 0;
  let n = originalNum;
  while (n > 0) {
    rev = rev * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return originalNum === rev;
}

console.log(largestPalindromeProduct(3));

/*
A palindromic number reads the same both ways. The largest
palindrome made from the product of two 2-digit numbers is
9009 = 91 × 99.

Find the largest palindrome made from the product of two
n-digit numbers.

Test cases:
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.
*/
