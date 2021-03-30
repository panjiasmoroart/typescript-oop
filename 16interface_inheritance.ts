// jadi interface itu bisa diturunkan ke interface yang lain
interface Vehicle {
  name: string;
  wheels: number;
}

interface ICar extends Vehicle {
  doors: number;
}

// misalkan disini class Civic implements interface ICar, maka dia butuh 3 property tersebut
class Civic implements ICar {
  name: string = "Civic";
  wheels: number = 4;
  doors: number = 4;
}