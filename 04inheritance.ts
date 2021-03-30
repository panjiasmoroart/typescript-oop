// pewarisan, jadi sifat atau prilaku si parent ini bisa diturunkan ke class anaknya/child
class OrangTua {

  nama: string = '';
  kaki: number = 0;

  bernafas() {
    console.log('nafas')
  }
}

// class Anak inherit ke OrangTua
class Anak extends OrangTua {
  rambut: string = "Hitam" 
}

const anak = new Anak();
anak.nama = "Deno TS";
anak.kaki = 2;
anak.rambut = 'Merah';
console.log(anak);