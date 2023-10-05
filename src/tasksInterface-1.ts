//Робота з інтерфейсами

// Спроєктуєте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва,ціна, категорія(закуска, основна страва, десерт)
// Розробіть функцію, яка приймає список страв і фільтрує їх за категоріє.


interface IMenu {
    name: string;
    price: number;
    category: 'appetizer' | 'mainCourse' | 'dessert';
}

function filterByCategory(menu: IMenu[], category:'appetizer' | 'mainCourse' | 'dessert'):IMenu[]{
    return menu.filter(item => item.category === category)
}

const menu: IMenu[] = [
    { name: 'Салат', price: 10, category: 'appetizer' },
    { name: 'Стейк', price: 25, category: 'mainCourse' },
    { name: 'Тірамісу', price: 8, category: 'dessert' },
    { name: 'Суп', price: 8, category: 'appetizer' },
    { name: 'Паста', price: 18, category: 'mainCourse' },
];

const filteredAppetizers = filterByCategory(menu, 'appetizer');
console.log('Закуски:', filteredAppetizers);

const filteredMainCourses = filterByCategory(menu, 'mainCourse');
console.log('Основні страви:', filteredMainCourses);

const filteredDesserts = filterByCategory(menu, 'dessert');
console.log('Десерти:', filteredDesserts);


