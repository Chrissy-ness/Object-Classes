//OO Challenge
// Part One 

class Vehicle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    honk() {
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${this.a} ${this.b} from ${this.c}`
    }
}

// Part Two
class Car extends Vehicle{
    numWheels() {
        return 4;
    }
}

//Part Three
class Motorcycle extends Vehicle {
    numWheels() {
        return 2;
    }

    revEngine() {
        return 'VROOM!!!'
    }
}

//Part Four 
class Garage {
    constructor(a) {
        this.cap = a; 
        this.vehicles = [];
    };

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only Vehicles are allowed in here!";
        }
        if(this.vehicles.length >= this.cap) {
            return "We are full!";
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle has been added!';
    }
}
