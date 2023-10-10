//Record<K, T>

//#1 Ви хочете створити об*єкт, який мапить імена користувача до їх віку.
type UserAges = Record<string, number>;

const userAges: UserAges = {
    "Alice": 30,
    "Bob": 25,
    "Charlie": 35
};
//#2 Мапа з іменеами місяців до кількості днів у них.
type MonthDays = Record<string, number>;

const monthDays: MonthDays = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    // і так далі для інших місяців
};