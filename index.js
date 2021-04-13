/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  //create constructor function
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
//create methods that allow person to eat and pushes food into stomach if food is edible and quantity is less than 10
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}
//sets stomach back to empty if person poops
Person.prototype.poop = function(){
  this.stomach = [];
}
//returns the string with name and age
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const lunchKidOne = new Person("Kylie", 6);
const lunchKidTwo = new Person("Ashton", 11);
const lunchKidThree = new Person("Yanna", 14);


 

  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.tank = 0;
    this.odometer = 0;
    this.model = model;
    this.milesPerGallon = milesPerGallon;
  }

  Car.prototype.fill = function(gallons){
    this.tank += gallons;
  }
  
const carStatsOne = new Car('Ford', 29);
const carStatsTwo = new Car('Tesla', 150);
const carStatsThree = new Car('Volkswagen', 26);

console.log(carStatsOne);
console.log(carStatsTwo); 
console.log(carStatsThree); 
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   this.name = name;
   this.age = age;
   this.favoriteToy = favoriteToy;
  }

  //subclassing shown below. Takes the parent (Person.prototype) and connects it to the child Baby.prototype
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
}
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding: If the "this" keyword has not been defined it will default to the window.
    2. Implicit Binding: The 'this' keyword is declared based on the name to the left of the dot when the function is invoked
    3. Explicit Binding: telling JS what teh 'this' keyword is defined as by using the .call or .apply methods
    4. New Binding: When a function is invoked as a constructor function ‘this’ points to the newly created object.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}