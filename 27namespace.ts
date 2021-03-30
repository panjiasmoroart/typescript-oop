// namespace digunakan untuk membungkus beberapa class yang sama agar tidak terjadi error
namespace NamespaceExample {
  // class Hewan {}
  // const kucing = new Hewan();
  export class Hewan {
    name: string = "Kucing Putih";
  }
  export const kucing = new Hewan();


  export class Animal {
    name: string = "Burung Kenari";
  }

}
// cara panggil class diluar harus diexport dulu classnya
const kenariBurung = new NamespaceExample.Animal();
console.log(kenariBurung);

const kucingPutih = NamespaceExample.kucing;
console.log(kucingPutih);