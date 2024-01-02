function reverse(x: number): number {
  let isNumsFiltered = false;
  if (x === 0) return 0;
  const reverseNum = x.toString().split("").reverse();
  let reversedWithoutZeros: Array<string> = [];

  for (let num of reverseNum) {
    if(num !== "0") {
      isNumsFiltered = true;
    }
    if (num === "0" && !isNumsFiltered) {
      continue;
    }

    reversedWithoutZeros.push(num);
  }

  const reversedInt = parseInt(reversedWithoutZeros.join(""));

  if (reversedInt > 0x7fffffff) return 0;

  if (x < 0) {
    return -reversedInt;
  }

  return reversedInt;
}

console.log(reverse(-12));
