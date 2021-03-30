// cara pertama
// karena pembuatan objek akan memanggil constructor terlebih dahulu
// maka kita bisa memanfaatkan constructor untuk membuat objek
class Animal {
  
  nama: string;
  kaki: number;
  
  constructor(namaAnimal: string, kakiAnimal: number) {
    this.nama = namaAnimal;
    this.kaki = kakiAnimal;
  }
}

// jadi dengan ini kita lebih mudah membuat class/objek serta mengisi parameternya
// kalo dibandingkan denga contoh sebelumnya saat membuat property_method.ts
const merpati = new Animal("Burung Merpati", 2);
console.log(merpati);

// cara kedua 
class AnimalKedua {
  constructor(public nama: string, public kaki: number) {
    // console.log('cara kedua membuat constructor');
  }
}

const kenari = new AnimalKedua("Burung Kenari", 2);
console.log(kenari);