class ClassA {
  name: string = "Class A";
}

class NewClass<T> {
  classProp: T;

  constructor(classParam: T) {
    this.classProp = classParam;
  }
}

const classA = new ClassA();
// dengan bigini type data ClassA yang sebelumnys string jadi lebih dinamis 
const classBaru = new NewClass(classA);

console.log(classBaru);
