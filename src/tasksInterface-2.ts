//Робота з інтерфейсами

// Спроєктуєте інтерфейс для користувача з полями ім*я, емейл, та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface IUser {
    name: string;
    email: string;
    dateOfBirth: number;
}

function isAdult(user:IUser):boolean{
    let adult:boolean;
    const age = new Date().getFullYear() - user.dateOfBirth;
    age >= 18 ? adult = true : adult = false
    return adult
}

const user: IUser = {
    name: 'John',
    email: 'john@example.com',
    dateOfBirth: 1990,
};

const isUserAdult = isAdult(user);
console.log(`Чи є користувач повнолітнім? ${isUserAdult}`);