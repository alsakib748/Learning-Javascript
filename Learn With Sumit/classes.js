// class Car {
//   constructor(name, year) {
//     this.name = name;
//     // debugger;
//     this.year = year;
//     console.log("Car name is " + this.name + " and year is " + this.year);
//     // debugger;
//   }

//   play() {
//     // console.log(this.name + " is playing");
//     console.log(`${this.name} is playing`);
//   }
// }

// // debugger;
// const car1 = new Car("Ford");
// const car2 = new Car("Rolls Roylles", 2014);
// const car3 = new Car("Mercedes Benz", 2014);
// car1.play();
// car3.play();

// console.log("--------------console.log(dir)---------------");

// let inh = new String("Al Sakib Ayon");
// console.dir(inh);

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  static show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

// console.log(myCar.show());
console.log(Model.show());
