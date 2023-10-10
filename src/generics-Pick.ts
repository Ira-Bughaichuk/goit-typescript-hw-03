// Pick <T, K>

//#1 У вас є об*єкт користувача і вам потрібно створити функцію, яка повертає лише ім*я та пошту користувача.
type ContactUser = {
    name: string;
    age: number;
    email: string;
}

// фактично створюється новий об'єкт в пам'яті, який містить копії властивостей.
function getContact1(obj:Pick<ContactUser, 'name' | 'email'>): Pick<ContactUser, 'name' | 'email'>{
    const contact: Pick<ContactUser, 'name' | 'email'> = {
        name: obj.name,
        email: obj.email,
    }
    return contact
   
}

// or

//результатом буде посилання на той самий об'єкт, який був переданий в функцію, і жоден новий об'єкт не створюється.
function getContact2(obj:Pick<ContactUser, 'name' | 'email'>): Pick<ContactUser, 'name' | 'email'>{
    return obj
}
const xxx: ContactUser = { name: "One",
            age: 20,
            email: "one@ukr.net"
}

getContact1(xxx)
getContact2(xxx) 

//#2 Ви хочете зберегти тільки певні поля з АРІ-відповіді для відображення в юі.

type ApiRes = {
    data: string;
    status: number;
    message: string;
};

type UiRes = Pick<ApiRes, 'data' | 'status'>;

const apiResponse: ApiRes = {
    data: "Some data",
    status: 200,
    message: "Hello"
};

const uiResponse: UiRes = {
    data: apiResponse.data,
    status: apiResponse.status
};