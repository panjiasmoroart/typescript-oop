interface Generics<T> {
  propA: T,
  methodA(): T;
}

// class yang menggunakan interface generic harus ada <T>
class GenericsClass<T> implements Generics<T> {
  propA: T;

  constructor(prop: T) {
    this.propA = prop;
  }

  methodA(): T {
    return this.propA;
  }
}

const genericsClassA = new GenericsClass<number>(555444);
console.log(genericsClassA.methodA());