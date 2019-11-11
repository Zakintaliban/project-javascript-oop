class Car {
  constructor(owner = "Zakin", name = "Toyota Agya") {
    this.owner = owner;
    this.name = name;
  }

  drive() {
    console.log(
      `The ${this.name} car owned by ${this.owner} drives on the road`
    );
  }

  getOwner() {
    return this.owner;
  }

  getOwner() {
    return this.name;
  }
}



const myCar = new Car("Zakin", "Toyota Agya");

console.log(myCar);
// Car { owner: 'Elon', name: 'Tesla Model S' }

myCar.drive();
// The Tesla Model S car owned by Elon drives on the road

console.log(myCar.getOwner());
// Elon



class SportsCar extends Car {
  constructor({ owner, name, color, price, engine }) {
    super(owner, name);
    this.color = color;
    this.price = price;
    this.engine = engine;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat("en-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(this.price);

    return formattedPrice;
  }

  getEngine() {
    return this.engine;
  }
}



const coolCar = new SportsCar({
  owner: "Zakin",
  name: "Toyota Agya",
  color: "White",
  price: "80000000", // IDR
  engine: "Gas"
});

console.log(coolCar);
// SportsCar { ... }

coolCar.drive();
// The Tesla Roadster car owned by Starman drives on the road

console.log(coolCar.getColor());
// Red

console.log(coolCar.getPrice());
// $200,000
