// jadi kita tanam generic itu didalam interface 
interface GenericInterface<T> {
  propA: T 
}

function genericsFunction<T>(value: T): GenericInterface<T> {
  let data: GenericInterface<T> = {
    // isinya adalah 
    propA: value 
  }
  return data;
}

console.log(genericsFunction<string>("Panji Asmoro"));
console.log(genericsFunction<number>(12345));
console.log(genericsFunction<boolean>(true));