// kita juga bisa mengimplementasikan dependency injection dengan interface,
// dengan adanya interface kita bisa menginject sebuah class ke dalam class lain secara dinamis
class Store {
  private name: string = 'Store A';
  private profit: number = 5000;

  getName(): string {
    return this.name;
  }

  getProvit(): number {
    return this.profit;
  }
}

class Store2 {
  private name: string = 'Store B';
  private profit: number = 10000;

  getName(): string {
    return this.name;
  }

  getProvit(): number {
    return this.profit;
  }
}

// jadi dengan adanya dependency injection ini nanti bisa kita tentukan tokonya di pasang dimana
// atau dinamis

// misalkan ada satu product untuk Fashion
class FashionProduct {
  // property store dengan typenya adalah class Store
  private store: Store;
  private name: string;
  private price: number;

  constructor(name: string, price: number){
    this.name = name;
    this.price = price;

    // jadi nanti secara otomatis product FashionProduct ini adalah tokonya Store
    // cara manual tidak menggunakan dependency injection, tidak efisien jika classnya banyak
    // harus mengubah satu satu jika mau menjual produk ditoko yang lain, dalam hal ini Store2
    this.store = new Store();
  }

  sell(): void {
    console.log(`${this.name} FashionProduct harga jual = ${this.price + this.store.getProvit()}`)
  }
}

class TechProduct {
  // property store dengan typenya adalah class Store
  private store2: Store2;
  private name: string;
  private price: number;

  constructor(name: string, price: number){
    this.name = name;
    this.price = price;
    // jadi nanti secara otomatis product TechProduct ini adalah tokonya Store2
    this.store2 = new Store2();
  }

  sell(): void {
    console.log(`${this.name} TeachProduct harga jual = ${this.price + this.store2.getProvit()}`)
  }
}

const bajuFashion = new FashionProduct('Baju lengan panjang', 50000);
bajuFashion.sell();

const techProduct = new TechProduct('TeachProduct Baju lengan panjang', 50000);
techProduct.sell();

//---------------------------------------------------------------------------------------------
// kita juga bisa mengimplementasikan dependency injection dengan interface,
// dengan adanya interface kita bisa menginject sebuah class ke dalam class lain secara dinamis

interface IStore {
  name: string;
  profit: number;
  getProvit(): number;
}

class TokoLama implements IStore {
  name: string = 'Toko Lama';
  profit: number = 20000;

  getName(): string {
    return this.name;
  }

  getProvit(): number {
    return this.profit;
  }
}

class TokoBaru implements IStore {
  name: string = 'Toko Baru';
  profit: number = 30000;

  getName(): string {
    return this.name;
  }

  getProvit(): number {
    return this.profit;
  }
}

class HijabProduct {
  // masukan interfacenya ke dalam property store
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number){
    this.name  = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(`${this.name} HijabProduct harga jual = ${this.price + this.store.getProvit()}`)
  }
}

class FoodProduct {
  // masukan interfacenya ke dalam property store
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number){
    this.name  = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(`${this.name} FoodProduct harga jual = ${this.price + this.store.getProvit()}`)
  }
}

const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();

// misalkan class HijabProduct mau dijual di tokoLama
// dengan begitu jika terjadi banyak perubah cukup inject/rubah disini saja
const hijab= new HijabProduct(tokoLama, "Hijab Mahal", 80000);
const food = new FoodProduct(tokoBaru, "Produk Mahal", 50000);

console.log(hijab);
console.log(food);
hijab.sell();
food.sell();
