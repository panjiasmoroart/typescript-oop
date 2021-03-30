// visibility atau yang biasa disebut access modifier digunakan untuk membatasi akses dari property atau method dari suatu class 
// public bisa dipanggil dari luar class atau mana saja 
// protected dipanggil oleh class itu sendiri dan turunannya
// private hanya bisa dipanggil oleh class itu sendiri

class Hewans {

  public nama: string; 
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia;
  }

  berjalan() {
    
  }
}

class Kucing extends Hewans {
  // konsepnya adalah pada class Kucing kita ingin menyembunyikan property ini, property ini ga perlu orang lain tahu
  // jadi misalkan ada class yang dimana propertynya orang lain tidak boleh tahu isinya kita jadikan saja private
  private mata: string = "Cokelat";
  private bulu: string = "Abu abu";
  private ekor: boolean = true;

  // mereka tahunya hanya method ini karena bersifat public  
  getBiodata() {
    console.log(this.mata + this. bulu + this.ekor);
    // karena protected jadi bisa diakses oleh class turunannya 
    // this.mamalia
  }
}

const kucing = new Kucing("Cika", 2, true);
kucing.getBiodata();
console.log(kucing);

// karena property mata private tidak bisa diakses dari luar class 
// kucing.mata
