// return_type ini pada sebuah method berfungsi untuk membatasi atau mengatur type ada yg direturn oleh method
class Burung {
  private kaki: number = 2;

  // nah kita bisa tambahkan type diakhir method ini
  getKaki(): number {
    return this.kaki;
  }

  // menggunakan void karena methodnya ga mereturn apa apa, jika dikasih string atau number pasti error
  // karena dia membutuhkan return, tapi kalo void tidak perlu return/kembalian
  terbang(): void {
    console.log('terbang');
  }

  // asynchronous function, type yang cocok adalah Promise<type-datanya> kemudian ada Generic
  async makan(): Promise<string> {
    return "Async function";
  }
}

const burung = new Burung();
console.log(burung.makan());