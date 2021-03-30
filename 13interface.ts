// interface (antarmuka) ketika kita membuat sebuah method atau property didalam interface 
// class yang mengimplement harus mempunya sebuah method atau property yang sama juga denga interface
interface AndroidPhone {
  name: string;

  menu(): void;
  home(): void;
  back(): void;
}

class Samsung implements AndroidPhone {
  
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log('menu clicked');
  }
  home(): void {
    console.log('menu tapped');
  }
  back(): void {
    console.log('back tapped');
  }
  
}

class Asus implements AndroidPhone {
  
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log('menu clicked');
  }
  home(): void {
    console.log('menu tapped');
  }
  back(): void {
    console.log('back tapped');
  }
  
}

// jadi game ini aturannya hanya bisa dijalankan disistem android saja
class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone) {
    this.phone = phone;
  }

  menu() {
    // method menu() dari class AndroidPhone, bukan gamenya
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }

  back(): void {
    console.log('kembali ke menu utama di game')
  }

}

const samsung = new Samsung('Tipe A');

const game = new GameA(samsung);
game.home();
game.menu();
game.back();

interface ApplePhone {
  home(): void;
}

class Iphone implements ApplePhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  home(): void {
    console.log('menu global');
  }
}

const iphone = new Iphone('Iphone SE');
// sekarang kita paksakan iphone ini masukan ke dalam GameA
// aturannya Game hanya bisa dijalankan disistem android saja
// pasti akan error
// const game2 = new GameA(iphone);