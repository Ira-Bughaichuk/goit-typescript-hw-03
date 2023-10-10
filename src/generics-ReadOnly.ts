// Readonly <T>

//#1 Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
// але ви хочете гарантувати, що функція не змінює вхідний масив.
function vertical(arr: ReadonlyArray<number>) :ReadonlyArray<number> {
    return arr
}
vertical([1, 2, 3, 4])

//#2 Створіть обєкт конфігурації, який не можна змінювати після його створення.
type UserPeople = {
    name: string;
    age: number;
    address: string;
}

let userOne: UserPeople = {
    name: "One",
    age: 25,
    address: "Kyiv",
};
let userTwo: Readonly<UserPeople> = {
    name: "Two",
    age: 20,
    address: "Khm",
}
