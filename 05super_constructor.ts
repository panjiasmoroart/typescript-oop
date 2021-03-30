class Mother {
  name: string;
  foot: number; 

  constructor(name: string, foot: number) {
    this.name = name;
    this.foot = foot;
  }
}

class Child extends Mother {
  eye: string;

  constructor(name: string, foot: number, eye: string) {
    // super ini digunakan untuk mengambil nilai parent constructor pada class Mother
    // karena pada constructor induknya memiliki 2 parameter, maka kita masukan juga 
    super(name, foot);
    this.eye = eye;
  }
}

let child = new Child("Panji Asmoro", 2, "Hitam");
console.log(child);