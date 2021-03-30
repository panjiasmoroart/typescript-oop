// jadi kadang kita butuh untuk menampilkan beberapa options setiap type yang masuk kedalam generics

// function generics24<T>(arg: T): T {
  // jika seperti ini pasti akan error, karena kita tidak tahu type data yg dimasukan
  // console.log(arg.length)
  // return arg; 
// }

// cara mengakses .length didalam function generic ini
interface Length {
  length: number;
}

function genericsLagi<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const genericsA = genericsLagi("Panji");
console.log(genericsA);

const genericsB = genericsLagi({length: 10, value: 23434});
console.log(genericsB);
