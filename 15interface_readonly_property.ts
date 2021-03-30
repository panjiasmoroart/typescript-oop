interface Student {
  readonly name: string;
  readonly age: number;
}

// karena ini readonly, jadi hanya satu kali pengisian saja atau mirip constanta (immutable) tidak bisa diubah
let student: Student = {name: 'Panji Asmoro', age: 27}
console.log(student)

// misalkan kita rubya property namenya, maka akan error karena dia readonly
// student.name = "Panji Keren";
