function longestPalindrome(s: string): string {
  let length = 0;
  let longestPalindrome = "";

  while (length !== s.length) {
    let newLongestPalindrome = "";

    for (let i = length; i < s.length; i++) {
      const char = s[i];
      newLongestPalindrome = newLongestPalindrome.concat(char);
      console.log({ newLongestPalindrome });

      const isSame = isSameBackwardLikeForward(newLongestPalindrome);

      if (isSame && newLongestPalindrome.length > longestPalindrome.length) {
        longestPalindrome = newLongestPalindrome;
      }
    }

    if (longestPalindrome.length === s.length) {
      break;
    }

    length++;
  }

  return longestPalindrome;
}

function isSameBackwardLikeForward(s: string) {
  if (s.length === 1) return true;
  let lastIndex = s.length - 1;
  let firstIndex = 0;
  let isSame = true;

  while (lastIndex !== 0) {
    const firstChar = s[firstIndex];
    const lastChar = s[lastIndex];

    if (firstChar !== lastChar) {
      isSame = false;
      break;
    }

    firstIndex++;
    lastIndex--;
  }

  console.log({ isSame });
  return isSame;
}

console.log(
  longestPalindrome(
    "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth",
  ),
);
