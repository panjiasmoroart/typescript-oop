class Manusia {
  // property
  nama: string = '';
  kaki: number = 0;
  
  // method function yg ada didalam class
  bernafas(): void {
    console.log(`${this.nama} sedang bernafas`);
  }

  berjalan(): void {
    console.log(`${this.nama} sedang berjalan`);
  }

}

const budi = new Manusia();
console.log(budi);

budi.nama = "Budi"
budi.kaki = 2;
budi.bernafas();
console.log(budi)