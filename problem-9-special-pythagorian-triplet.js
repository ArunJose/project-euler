function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let a,b,c;
 for(a=1;a<sumOfabc;a++){
   for(b=1;b<sumOfabc;b++){
     c=sumOfabc-a-b;
     if(a*a+b*b===c*c){
       return a*b*c
     }
   }
 }
 return false;
}
console.log(specialPythagoreanTriplet(1000))

/*
Project Euler: Problem 9: Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

Tests:
specialPythagoreanTriplet(24) should return a number.
specialPythagoreanTriplet(24) should return 480.
specialPythagoreanTriplet(120) should return 49920, 55080 or 60000
specialPythagoreanTriplet(1000) should return 31875000.
*/
