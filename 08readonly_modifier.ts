// readonly_modifier digunakan agar suata property datanya tidak bisa diubah (imutable) 
// tapi bukan masuk ke visibility modifier melainkan hanya seubah bantuan
class Person {
  readonly gender: string = "Pria";
}

const person = new Person();
// property gender memang sudah ditentukan sebagai pria, jadi tidak bisa dibuah lagi
// person.gender = "Wanita";

// perbedaanya dengan const, const hanya digunakan sebaga variabel biasa 
// const a = "jksdlfd";
// const b = 809009;

// readonly_modifier digunakan untuk property di dalam class