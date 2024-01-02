function isPalindrome(x: number): boolean {

  const xString = x.toString(); 
  const xStringReverse = xString.split('').reverse().join('');

  return xString === xStringReverse;  
    
};



