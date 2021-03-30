// jadi kita bisa mengakses beberapa method pada class didalam generics function 
interface Product{
  sell(): void;
}

// function ini untuk menjalankan beberapa method yg ada dialam class 
function sellProducts<T extends Product>(products: T[]): void {
  // jadi argumen yg dimasukan berupa array isinya dinamis
  products.forEach(product => product.sell());
}

class CarProduct implements Product {
  sell(): void {
    console.log('jual mobil')
  }
}

class MotorProduct implements Product {
  sell(): void {
    console.log('jual motor')
  }
}

const mobil = new CarProduct();
const motor = new MotorProduct();

sellProducts([mobil, motor]);