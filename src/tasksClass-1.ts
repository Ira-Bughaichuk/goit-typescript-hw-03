
//Робота з класами

// Спроєктуєте інтерфейс CarProperties з такими характеристиками як brand, year, fuelType
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDatails(), що виводитьінформацію про автомобіль.

interface ICarProperties {
    brand: string;
    year: number;
    fuelType: string;
}

// Створіть клас Car, який реалізує цей інтерфейс і має метод getDatails(), що виводить інформацію про автомобіль.
class CarBase implements ICarProperties {
    brand: string;
    year: number;
    fuelType: string;

    constructor(brand: string, year: number, fuelType: string) {
        this.brand = brand;
        this.year = year;
        this.fuelType = fuelType;
    }

    getDatails(): string {
        return `Brand: ${this.brand}, Year: ${this.year}, Fuel Type: ${this.fuelType}`;
    }
}

const car1 = new CarBase('Toyota', 2022, 'Gasoline');
console.log(car1.getDatails()); 

const car2 = new CarBase('BMW', 2020, 'Diesel');
console.log(car2.getDatails()); 