class Car {
  constructor(pemilik = "Zakin", merk = "Toyota Agya") {
    this.pemilik = pemilik;
    this.merk = merk;
  }

  drive() {
    console.log(
      `Mobil ${this.merk} itu yang punya ${this.pemilik} sedang menyetir di jalan`
    );
  }

  getpemilik() {
    return this.pemilik;
  }

  getPemilik() {
    return this.merk;
  }
}

const myCar = new Car("Zakin", "Toyota Agya");

console.log(myCar);
// Car { pemilik: 'Elon', merk: 'Tesla Model S' }

myCar.drive();
// The Tesla Model S car owned by Elon drives on the road

console.log(myCar.getpemilik());
// Elon

class SportsCar extends Car {
  constructor({ pemilik, merk, warna, harga, mesin }) {
    super(pemilik, merk);
    this.warna = warna;
    this.harga = harga;
    this.mesin = mesin;
  }

  getwarna() {
    return this.warna;
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
  pemilik: "Zakin",
  merk: "Toyota Agya",
  warna: "Putih",
  harga: "80000000", // IDR
  mesin: "Gasoline"
});

console.log(coolCar);
// SportsCar { ... }

coolCar.drive();
// The Tesla Roadster car owned by Starman drives on the road

console.log(coolCar.getwarna());
// Putih

console.log(coolCar.getPrice());
// Rp.80,000,000
