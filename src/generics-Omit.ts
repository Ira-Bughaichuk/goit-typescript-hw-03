// Omit<T, K>

//#1 У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтьську сторону.
type FormUser = {
    password: string;
    email: string;
    age: string;
}
type ClientUser = Omit<FormUser, 'password'>
const clientObj:ClientUser = {
    email: "dddd",
    age: "25",
}

//#2 Ви хочете створити новий тип на основі АРІ-відповіді, але без двти створення.
type ApiResponse = {
    data: string;
    status: number;
    message: string;
};
type ApiResponseWithoutMessage = Omit<ApiResponse, 'data'>;
const response: ApiResponseWithoutMessage = {
    message: "Hello",
    status: 200
};

  // data: Date.now.toString(),