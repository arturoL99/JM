const rand = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const uniqueRand = (min: number, max: number, prev: number) => {
  let next = prev;
  while (prev === next) next = rand(min, max);
  return next;
};

export const possibleCombinations = [
  { configuration: "1", roundness: "1" },
  { configuration: "1", roundness: "2" },
  { configuration: "1", roundness: "4" },
  { configuration: "2", roundness: "2" },
  { configuration: "2", roundness: "3" },
  { configuration: "3", roundness: "3" },
];
