function strStr(haystack: string, needle: string): number {
  // let nFrom = 0;
  // let hStrings = haystack.split("");
  //
  // while (nFrom <= haystack.length) {
  //   const sSlice = hStrings.slice(nFrom, nFrom + needle.length);
  //
  //   const buildedS = sSlice.join("");
  //   console.log(buildedS, needle);
  //   if (buildedS === needle) return nFrom;
  //
  //   nFrom++;
  // }
  //
  // return -1;

  const splits = haystack.split(needle);
  console.log(splits)
  if(splits.length) return -1
  return haystack.indexOf(needle);
}

console.log(strStr("hello", "ll"));
