type GenericType<T> = T

// kalau generice interface lebih ke objek
// interface GenericInterface<T> {
//   propA: T 
// }

function showGenerics<T>(value: T): GenericType<T> {
  return value
}

console.log(showGenerics<string>("Panji Asmoro"));
console.log(showGenerics<number>(12345));
console.log(showGenerics<boolean>(true));