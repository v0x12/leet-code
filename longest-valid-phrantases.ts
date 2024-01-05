function longestValidParentheses(s: string): number {
  console.log("ENTER");
  let inspected = 0;
  let valid = 0;

  while (inspected <= s.length - 1) {
    const left = s[inspected];
    const right = s[inspected + 1];

    if (left === "(" && right === ")") {
      valid += 2;
      inspected++;
    }
    inspected++;
  }

  return valid
}

console.log(longestValidParentheses(")()())"));
