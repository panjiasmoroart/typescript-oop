// setter = mengisi atau menset suatu nilai, biasanya digunakan untuk mengisi variabel yg memiliki akses selain public
// getter = mendapatkan nilai suatu property

class ProductA {
  private _price: number = 0;
  private discount: number = 0.05;

  set price(value: number) {
    // karenat set jadi tidak ada pengembaliannya seperti return
    // jadi sebelum kita memasukan data kedalam property kita bisa melakukan validasi 
    // bisa dilakukan di setter 
    this._price = value - (value * this.discount) // <-- menghitung discount 5%
  }

  get price() {
    return this._price;
  }
}

const productA = new ProductA();
productA.price = 2000;
console.log(productA.price);