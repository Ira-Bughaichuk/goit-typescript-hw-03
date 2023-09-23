//У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

//Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, 
//яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). 
//Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

//Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. 
//Клас Person повинен мати метод getKey, який повертає збережений ключ.

//Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), 
//або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, 
//який додає об'єкт класу Person у масив tenants, якщо door відкрита. 
//Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

//Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. 
//Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, 
//то двері відчиняються.



class Key{
    private signature: string;
  
    constructor() {
      this.signature = Math.random().toString(36).slice(2);
    }
  
    getSignature(this: Key): string {
        return this.signature;
      }

}
  
class Person{
    private key: Key;

    constructor(key: Key){
        this.key = key;
    }

    getKey(): string {
        return this.key.getSignature();
    }
}  

abstract class House{
    door: boolean;
    key: Key;
    tenants: Person[] = [];

    comeIn(person :Person): Person[]{
        if(this.door){
            this.tenants.push(person)
        }
        return this.tenants
    }
    abstract openDoor(key:Key):boolean;
}

class MyHouse extends House{
    constructor(key: Key) {
        super();
        this.key = key;
      }

    openDoor(enteredKey: Key):boolean{
        if(enteredKey === this.key){
            this.door = true; // Відкриваємо двері
            return true
        }
        return false
    }

   
}
  
//Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

// Із таким визовом house.openDoor(person.getKey()); не працють класи, підскажіть що і як можна це виправити, будь ласка!)
//house.openDoor(person.getKey());

house.openDoor(key);

house.comeIn(person);

export {};