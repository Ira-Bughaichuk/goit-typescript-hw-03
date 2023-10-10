//Partial<T>

//#1 Уявімо що у вас є форма редагування профілю користувача. 
// користувач можк вибрати, які пля він хоче оновити. Створіть тип для такої форми на основі існуючого типу юзер.

type User = {
    name: string;
    age: number;
    email: string;
}
 type updateUser = Partial<User>;

//#2 У вас є конфігураційний об*єкт з декількома полями. 
// Створіть функцію, яка приймає  часткові налаштування та повертає повний конфігураційний об*єкт.

function updateObj(obj:User, objUpdate: Partial<User> ) : User{
    const newObj = {...obj, ...objUpdate};
    return newObj
}
const obj= {
    name: "One",
    age: 25,
    email: "kyiv@ukr.net"
}
updateObj(obj, {
    name: "Ira",
    email:" iren@ukr.net",
})