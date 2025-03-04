function isPalindrome(num) {
    let strNum = num.toString();
    let reversed = strNum.split('').reverse().join('');
    return strNum === reversed;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 
console.log(isPalindrome(1221)); 
