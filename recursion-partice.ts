function filter<T>(
  list: T[],
  predicate: (e: T) => boolean,
  index = 0,
): Array<T> {
  if (index < list.length) {
    const filtered = filter(list, predicate, index + 1);
    console.log("PASS");
    const element = list[index];

    console.log(element, index);

    if (predicate(element)) {
      return [element, ...filtered];
    }

    console.log({ filtered });
    return filtered;
  }

  return [];
}

const names = [
  "Niki",
  "Norbi",
  "Natalia",
  "Nora",
  "Natasha",
  "Nati",
  "Nika",
  "Norbi",
  "Tereza",
];

console.log(filter(names, (el) => el === "Norbi"));
