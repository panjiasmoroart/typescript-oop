// jadi kita bisa mengabaikan property property yang sifatnya optional
interface Teacher {
  name: string;
  age: number;
  //phone? ini sifat optional boleh ada atau tidak bagi class yang mengimplement
  phone?: string;
}

// dengan begini kita tidak harus memasukan phone
let teacher: Teacher = {name: "Panji Asmoro", age: 28}
console.log(teacher)