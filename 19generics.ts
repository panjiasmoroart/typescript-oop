// Generic menjadikan sebuah function, class atau interface memiliki berbagai type data yang dinamis

// parameter dengan type any (bisa memasukan type data apa pun)
function getData(value: any) {
  return value;
}

const data1 = getData("test");
// const data1 = getData(123456).length  // ---> hasilnya pasti undefined
console.log(data1);

// kelemahannya adalah jika menggunakan type any kita tidak bisa tahu type data apa yg diinput
// dan juga tidak bisa menggunakan length untuk menghitung panjang karakter didalam string
// atau tidak bisa juga pake fitur toLowerCase, kalo misalkan data yg diinput number kita 
// tidak bisa menggunakan toLocalString, toString, toFix dll 


// function yang ada genericnya 
function getDataWithGeneric<T>(value: T): T {
  return value;
}

// getDataWithGeneric<typedatanya>
const dataString = getDataWithGeneric<string>("test data 2");
console.log(dataString.length);

const dataNumber = getDataWithGeneric<number>(123);
console.log(dataNumber.toFixed(2));