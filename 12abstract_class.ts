// abstract class adalah sebuah class yang tidak bisa diinstance secara langsung oleh client
// abstract class ini bisa juga sebagai template yang mana setiap class yang mengextendsnya 
// harus mengimplementasikan method yang sudah ditentukan oleh si abstract class ini
// ada aturannya lagi pada abstract class ini harus ada 1 abstract method 
abstract class AnimalsAgain {

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makan(): void {
    console.log(`${this.name} sedang makan`);
  }

  // karena ini masih belm jelas atau abstract, atau bergeraknya ini mau apa si
  abstract bergerak(): void;
}



class Cat extends AnimalsAgain {
  constructor() {
    // constructor dari parentya kita isi langsung saja
    super('KUCING');
  }

  // aturannya harus ada method bergerak juga 
  bergerak(): void {
    console.log('kucing berjalan');
  }
}

class Bird extends AnimalsAgain {
  constructor() {
    super('BURUNG');
  }
 
  bergerak(): void {
    console.log('burung terbang');
  }
}

const kucing = new Cat();
kucing.makan();
kucing.bergerak();

const burung = new Bird();
burung.makan();
burung.bergerak();