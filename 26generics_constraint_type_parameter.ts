function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a"));
console.log(getProperty(x, "b"));

// akan terjadi error karena memang key z tidak ada di object x
// console.log(getProperty(x, "z"));