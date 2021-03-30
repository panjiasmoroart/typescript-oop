// yang menarik interface di typescript jadi interface bisa extends class
class Animal {
  name: string; 

  constructor(name: string) {
    this.name = name;
  }
}

interface IShark extends Animal {
  swim(): void;
}

// seperti biasa ketika kita implements interface harus ada property atau method sebelumnya
class Shark implements IShark {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  swim(): void {
    console.log('berenang')
  }

}

const ikan_hiu = new Shark("Ikan Hiu");
console.log(ikan_hiu);