// jadi constructor ini sebuah method yg dipanggil terlebih dahulu ketika objek dibuat menggunakan class
class Mobil {

  constructor() {
    console.log('constuctor akan selalu dipanggil terlebih dahulu');
  }

}

const avanza = new Mobil();
