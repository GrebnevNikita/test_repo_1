let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"

let user = {     // объект
    name: "John",  // под ключом "name" хранится значение "John"
    age: 30        // под ключом "age" хранится значение 30
};


// получаем свойства объекта:
alert(user.name); // John
alert(user.age); // 30


// Для удаления свойства мы можем использовать оператор delete:

delete user.age;


let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];

let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
};


// Вместо name:name мы можем написать просто name:

function makeUser(name, age) {
    return {
        name, // то же самое, что и name: name
        age   // то же самое, что и age: age
        // ...
    };
}

// Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:

let user = {
    name,  // тоже самое, что и name:name
    age: 30
};


let user = {};

alert(user.noSuchProperty === undefined); // true означает "свойства нет"


// Это когда свойство существует, но содержит значение undefined:

let obj = {
    test: undefined
};

alert(obj.test); //  выведет undefined, значит свойство не существует?
alert("test" in obj); // true, свойство существует!


let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // ключи
    alert(key);  // name, age, isAdmin
    // значения ключей
    alert(user[key]); // John, 30, true
}


let codes = {
    "49": "Германия",
    "41": "Швейцария",
    "44": "Великобритания",
    // ..,
    "1": "США"
};

for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
// Таким образом, чтобы решить нашу проблему с телефонными кодами, мы можем схитрить, сделав коды не целочисленными свойствами. Добавления знака "+" перед каждым кодом будет достаточно.
let codes = {
    "+49": "Германия",
    "+41": "Швейцария",
    "+44": "Великобритания",
    // ..,
    "+1": "США"
};

for (let code in codes) {
    alert(+code); // 49, 41, 44, 1
}


// Здесь мы помещаем копию message во phrase:

let message = "Привет!";
let phrase = message;
// В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".

// Объекты ведут себя иначе.
let user = {name: "John"};
let admin = user; // копируется ссылка


// Сравнение по ссылке
// Два объекта равны только в том случае, если это один и тот же объект.

// Например, здесь a и b ссылаются на один и тот же объект, поэтому они равны:

let a = {};
let b = a; // копирование по ссылке

alert(a == b); // true, обе переменные ссылаются на один и тот же объект
alert(a === b); // true
// И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):

let a = {};
let b = {}; // два независимых объекта

alert(a == b); // false


// Object.assign(dest, [src1, src2, src3...])
// Первый аргумент dest — целевой объект.
//     Остальные аргументы src1, ..., srcN (может быть столько, сколько необходимо) являются исходными объектами
// Метод копирует свойства всех исходных объектов src1, ..., srcN в целевой объект dest. Другими словами, свойства всех аргументов, начиная со второго, копируются в первый объект.
//     Возвращает объект dest.
//     Например, мы можем использовать его для объединения нескольких объектов в один:

let user = {name: "John"};

let permissions1 = {canView: true};
let permissions2 = {canEdit: true};

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "John", canView: true, canEdit: true }
// Если скопированное имя свойства уже существует, оно будет перезаписано:

let user1 = {canView: true}


let objects = [{'a': 1}, {'b': 2}];

// Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, например _.cloneDeep(obj) из библиотеки JavaScript lodash.
let deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false


let user = {
    name: "John",
    age: 30
};
user.sayHi = function (rrr) {
    alert("Привет!" + rrr);
};
user.sayHi(123); // Привет!
// Конечно, мы могли бы использовать заранее объявленную функцию в качестве метода, вот так:

let user = {
    // ...
};

// сначала, объявляем
function sayHi() {
    alert("Привет!");
}

// затем добавляем в качестве метода
user.sayHi = sayHi;

user.sayHi(); // Привет!


// Существует более короткий синтаксис для методов в литерале объекта:

// эти объекты делают одно и то же

user = {
    sayHi: function () {
        alert("Привет");
    }
};

// сокращённая запись выглядит лучше, не так ли?
user = {
    sayHi() { // то же самое, что и "sayHi: function(){...}"
        alert("Привет");
    }
};
// Как было показано, мы можем пропустить ключевое слово "function" и просто написать sayHi().


let user = {
    name: "John",
    age: 30,

    sayHi() {
        // "this" - это "текущий объект".
        alert(this.name);
    }

};

user.sayHi(); // John


// Значение this вычисляется во время выполнения кода, в зависимости от контекста.

// Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение «this» в вызовах:

let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi() {
    alert(this.name);
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// Значение this определяется во время исполнения кода.


// Функция-конструктор
// Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
//
//     Имя функции-конструктора должно начинаться с большой буквы.
//     Функция-конструктор должна выполняться только с помощью оператора "new".

// Другими словами, new User(...) делает что-то вроде:

function User(name) {
    // this = {};  (неявно)

    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;

    // return this;  (неявно)
}

// Таким образом, let user = new User("Jack") возвращает тот же результат, что и:

let user = {
    name: "Jack",
    isAdmin: false
};

// Если в нашем коде присутствует большое количество строк, создающих один сложный объект,
// то мы можем обернуть их в функцию-конструктор, которая будет немедленно вызвана, вот так:

// создаём функцию и сразу же вызываем её с помощью new
let user = new function () {
    this.name = "John";
    this.isAdmin = false;

    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
};
// Такой конструктор не может быть вызван снова, так как он нигде не сохраняется, просто создаётся
// и тут же вызывается. Таким образом, этот трюк направлен на инкапсуляцию кода, который создаёт отдельный объект, без возможности повторного использования в будущем.


// Возврат значения из конструктора, return
// Обычно конструкторы не имеют оператора return. Их задача – записать все необходимое в this, и это автоматически становится результатом.
//
//     Но если return всё же есть, то применяется простое правило:
//
//     При вызове return с объектом, вместо this вернётся объект.
//     При вызове return с примитивным значением, оно проигнорируется.
//     Другими словами, return с объектом возвращает этот объект, во всех остальных случаях возвращается this.
//
//     К примеру, здесь return замещает this, возвращая объект:

function BigUser() {

    this.name = "John";

    return {name: "Godzilla"};  // <-- возвращает этот объект
}

alert(new BigUser().name);  // Godzilla, получили этот объект
// А вот пример с пустым return (или мы могли бы поставить примитив после return, неважно):

function SmallUser() {

    this.name = "John";

    return; // <-- возвращает this
}

alert(new SmallUser().name);  // John

//
// Создание методов в конструкторе
// Использование конструкторов для создания объектов даёт большую гибкость. Функции-конструкторы могут иметь параметры, определяющие, как создавать объект и что в него записывать.
//
//     Конечно, мы можем добавить к this не только свойства, но и методы.
//
//     Например, new User(name) ниже создаёт объект с заданным name и методом sayHi:

function User(name) {
    this.name = name;

    this.sayHi = function () {
        alert("Меня зовут: " + this.name);
    };
}

let john = new User("John");

john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
//










