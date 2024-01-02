// g = [1,2], s = [1,2,3]
// g -> Childrens greed factor
// s -> Cookies size
// solution: Green factor vs cookie size, if the greet factor is bigger than the cookie size,
// then the child should get a cookie
function findContentChildren(g: number[], s: number[]): number {
  let givedCookies: number = 0;
  let gCopy = [...g].sort((a, b) => a - b);
  let sCopy = [...s].sort((a, b) => a - b);

  gCopy.forEach((greed) => {
    if (sCopy.length === 0) return;

    for (let i = 0; i < s.length; i++) {
      const cookieSize = sCopy[i];

      if (greed <= cookieSize) {
        givedCookies += 1;
        delete sCopy[i];
        break;
      }
    }
  });

  return givedCookies;
}

console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
