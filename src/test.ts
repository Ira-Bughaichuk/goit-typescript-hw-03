//Композицію. Клас містить у собі інший клас та керує його життєвим циклом.
class Computer {
  processor: Processor;
  constructor() {
    this.processor = new Processor();
  }
  start() {
    this.processor.processData();
  }
}
class Processor {
  processData() {
    console.log("Processing data...");
  }
}
const computer = new Computer();
computer.start();

//Асоціація. Класи взаємодіють один з одним.
class Car {
  driver: Driver | null = null;
  setDriver(driver: Driver) {
    this.driver = driver;
  }
  startJourney() {
    if (this.driver) {
      this.driver.drive();
    }
  }
}
class Driver {
  drive() {
    console.log("Driving...");
  }
}
const driver = new Driver();
const car = new Car();
car.setDriver(driver);
car.startJourney();

//Агрегацію. Клас містить інший клас, але не керує його життєвим циклом.
class Team {
  members: Programmer[];
  constructor(members: Programmer[]) {
    this.members = members;
  }
  startProject() {
    this.members.forEach((member) => member.code());
  }
}
class Programmer {
  code() {
    console.log("Coding...");
  }
}
const programmers = [new Programmer(), new Programmer()];
const team = new Team(programmers);
team.startProject();
