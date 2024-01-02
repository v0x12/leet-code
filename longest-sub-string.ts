function lengthOfLongestSubstring(s: string): number {
  if (s === "") return 0;
  const split = s.split("");
  console.log(split);
  let last = 0;
  let tracker: Record<string, number> = {};
  let currentMax = 0;

  while (last !== split.length) {
    for (let i = last; i < split.length; i++) {
      const char = split[i];
      tracker[char] = (tracker[char] ?? 0) + 1;

      const current = tracker[char];

      if (current > 1) {
        tracker[char] = tracker[char] - 1;
        console.log(tracker);
        const newMax = Object.values(tracker).reduce(
          (prev, next) => prev + next,
        );

        if (currentMax < newMax) {
          currentMax = newMax;
        }
        tracker = {};
        break;
      }
    }

    last++;
  }
  return currentMax || s.length;
}

function lengthOfLongestSubstring2(s: string) {
  if (s === "") return 0;
  let tracker: Map<string, boolean> = new Map();
  let lastChecked = 0;
  let currentMax = 0;

  while (lastChecked !== s.length) {
    for (let i = lastChecked; i < s.length; i++) {
      const char = s[i];

      const current = tracker.get(char);

      if (!current) {
        tracker.set(char, true);
      } else {
        const newMax = tracker.size;
        if (newMax > currentMax) {
          currentMax = newMax;
        }

        tracker = new Map();
        break;
      }
    }
    lastChecked++;
  }

  return currentMax || s.length;
}

console.log(lengthOfLongestSubstring2("aab"));
