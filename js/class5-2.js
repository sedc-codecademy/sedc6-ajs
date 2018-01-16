//Constructor and Inheritance

class CarInfo
{
    constructor(seats, engine, fuel)
    {
        this.seats = seats || false;
        this.engine = engine || false;
        this.fuel = fuel || false;
    }

    getInfo()
    {
        return this;
    }
}

class Car extends CarInfo
{
    constructor(seats, engine, fuel)
    {
        super(seats, engine, fuel);
    }
}

let car = new Car();
console.log(car, car.getInfo());
