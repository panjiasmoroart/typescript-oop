// dengan static ini kita bisa menjalankan sebuah prperty/method tanpa harus instance objek
class Ayam {
  // karena kaki ini static yang mana dia nempel dengan classnya Ayam
  static kaki: number = 2;
  
  static jalan() {
    // karena methodnya static kita bisa gunakan this.kaki
    console.log(`Ayama berjalan dengan ${this.kaki} kaki`);
  }

  getKaki() {
    // jika kita gunakan this.kaki ini berarti dia merupakan property dari objek bukan dari class
    // console.log(this.kaki)
    
    // cara mendapatkan propertinya seperti ini 
    console.log(Ayam.kaki)
  }
}
// kita bisa langsung panggil method jalan tanpa harus membuat objek
console.log(Ayam.jalan());

// karena method getKaki bukan static maka seperti biasa kita perlu instance objek dulu 
const ayam1 = new Ayam();
const ayam2 = new Ayam();
console.log(ayam1.getKaki());
console.log(ayam2.getKaki());

// jadi static ini bersifat global, jadi jika kita mengubah static propertinya, maka semua objek
// dari class tersebut akan mengalami dampaknya, contoh 
Ayam.kaki = 4;
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
const ayam6 = new Ayam();
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
console.log(ayam6.getKaki());

