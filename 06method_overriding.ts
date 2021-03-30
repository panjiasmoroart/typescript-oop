// overriding berfungsi untuk mereplace atau menggantikan method yang sudah ada di parent classnya
class Animals {
  name: string = "";

  berkicau() {
    console.log("sedang berkicau");
  }
}

class BurungLoveBird extends Animals {
  // tapi isinya kita rubah dari aslinya 
  berkicau() {
    console.log('malas berkicau');
  }
}

const burung = new BurungLoveBird();
burung.berkicau();