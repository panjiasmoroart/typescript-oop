// type vs interface keduanya biasanya digunakan untuk mendefine  tipe data namun sebenarnya dia berbeda
// interfacenya hanya bisa memakai object type, sedangkan type bisa langsung di define type data atau objek
// interface bisa di merge sedangkan type tidak bisa
// interface juga bisa implements dan extends class dengan mudah tapi kalo type tidak bisa
// type juga bisa di merge/intersec tapi dengan cara yang berbeda

// jika kita buat string langsung seperti ini pasti akan error
// interface Example = string

// kalo kita buat objek tidak akan error
// interface Example {
//   // blabla
// }

// contoh merge interface
interface Samsung {
  phoneName: string;
}

interface Samsung {
  phonePrice: number;
}

class Phone implements Samsung {
  phoneName: string;
  phonePrice: number;
}

// berbeda denga type dia bisa dibuat string atau objek
// type Example = string
// atau
// type Example = {
//   name: string;
// }

// contoh merge type
type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Employee1 = Name & Age;
// atatu pake union
type Employee2 = Name | Age;

const Person: Employee1 = {
  name: "Panji Asmoro",
  age: 20,
};

// kapan kita haru menggunakan interface dan kapan kita harus menggunakan type
// pakailah interface ketika kita membuat sebuah objek baru atau method dari sebuah objek
// misalkan : class implements interface NamaInterfacenya {}

// pakailah sebuah type jika ingin membuat sebuah variable atau function
// contoh
type typeName = string;
type typeFunction = void;
let firstName: typeName;
function getData(): typeFunction {}
