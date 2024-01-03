const phoneNumberMap: Record<string, Array<string>> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "v", "u"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  const combinations: Array<string> = [];

  const backtrack = (idx: number, combination: string) => {
    if (combination.length === digits.length) {
      combinations.push(combination);
      return;
    }

    for (let digit of phoneNumberMap[digits[idx]]) {
      backtrack(idx + 1, combination + digit);
    }
  };

  if (digits && digits.length) backtrack(0, "");

  return combinations;
}

console.log(letterCombinations("23"));
