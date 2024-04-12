function Car(make, model, year)
{
    this.make = make;
    this.model = model;
    this.year = year;
}

// The keyword new allows you to use a constructor to create objects
let c1 = new Car('honda', 'civic', 2020);
console.log(c1);


//the code below wont work
let c2 = Car('toyota', 'camry', 2021);
console.log(c2);