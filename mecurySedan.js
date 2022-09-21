//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers) {
            console.log(this.model + " " + this.make + " has room available")
        } else {
            console.log(this.model + " " + this.make + " is full")
        }
    }
    start() {
        if (this.fuel > 0) {
            return this.start == true
        } else {
            return this.start == false
        }
    }
    scheduleService(mileage) {
        if (mileage > 30000) {
            console.log("Time for maintenance")
        } else {
            console.log("Everything's fine for now")
        }
    }
}

let myCar = new Car('mercury', 'sedan', '2007', 'green', 7000)

myCar.start()
myCar.loadPassenger(5)
myCar.scheduleService()

console.log(myCar)
