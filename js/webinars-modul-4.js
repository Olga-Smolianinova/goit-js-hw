
// // Compute Consumer Price Index (CPI)
//     const stringBasket = '1 hamburger, 4 hotdog, 2 coke, 4 milk'
    

//     // Упрощаем запись. Сначала посчитаем без года:
//     const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 };
   
//      const data = {
//       2014: {hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//       2015: {hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//       2016: {hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 }
//     }

// const parseBasket = (basket) => {
//     const goods = basket.split(', ');
//     const result = {};

//     // 1.Перепишем для удобства 
//     // '1 hamburger, 4 hotdog, 2 coke, 4 milk' 
//     // в 
//     // hamburger: 1, 
//     // hotdog: 4,
//     // coke: 2,
//     // milk: 4
//     for (const good of goods) {
//         // good.split(' ') // => ['1', 'hamburger'] //разбиваем строку с помощью split(' ') и чтобы строку переписать в формате  ['1', 'hamburger'] - используем деструктуризацию, где '1' - count, а 'hamburger' - name. Получается такая запись:
//         const [count, name] = good.split(' ');

//         result[name] = Number(count);
//     }
    
//     return result;
// };

// console.log(parseBasket('1 hamburger, 4 hotdog, 2 coke, 4 milk'));

// // 2. Берем строку которая получилась и дальше уже работаем с ней. Пишем функцию:
// const basket = parseBasket(stringBasket);

// const countBusket = (basket, year ) => {
//     const busketEnteries = Object.entries(basket);
//     let sum = 0;
    
//     for (const busketEntry of busketEnteries) {
//         console.log(busketEntry);
        
//         // деструктиризация
//         const [name, count] = busketEntry;

//         // Считаем
//         const priceFromYear = year[name];
//         sum += priceFromYear * count;
//     }
//     return sum;
// };

// // countBusket(basket, data)
// console.log(countBusket(basket, yearData));

// // 3. Вывести сколько пользователь тратил по годам
// const getBasketPerYears = (basket, data) => {
//   // write some code to get solution 
//   // use existing functions
//   // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
//   // const prices = { 
//   //     2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
//   //     2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
//   //     2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
//   // }
// }
// console.log(getBasketPerYears(basket, data))


// Задача
// Створити класи Library та Book
// 1. Клас Library  буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.

// Також цей клас буде мати такі методи:
// 1.1. Метод buy - це метод, що приймає аргументом обєкт книги і додає її в бібліотеку, якщо її там ще немає. Якщо книга вже є показує повідомлення, що книга вже куплена;
// 1.2. Метод sell - це метод, що приймає аргументом назву книги і видаляє її з бібліотеки;
// 1.3. Метод addToFavourite - це метод, що приймає аргументом назву книги і дадає обєкт книги в список улюблених;
// 1.4. Метод removeFromFavourite - це метод, що приймає назву книги і видаляє її з списку улюблених;
// 1.5. Гетер countFavouriteBook - це гетер, що показує кількість книжок, що додані в улюблені;
// 1.6. Гетер finishedBook - це гетер, що містить колекцію всіх прочитаних книжок;
// 1.7. Метод totalCost - це метод, що рахує вартість всіх книжок в бібліотеці.

// 2. Клас Book буде описувати окрему книгу. Кожна книга - це буде обєкт з такими ключами:
// *author;
// *title;
// *price;
// *totalPage;
// *currentPage.

// Також цей клас буде мати такі методи:
// 2.1. Метод read - це метод, що приймає кількість сторінок, що було прочитано і міняє значення currentPage;
// 2.2. Гетер bookProgres - гетер, що переводить кількість прочитаних сторінок в відсотки;
// 2.3. Сетер bookProgres - сетер, що переводить відсоток прочитаних сторінок в кількість.

// Клас Book приймає один аргумент - обєкт з параметрами книги. В середині класу використовувати деструктуризацію обєкта.

const book = { //2
author: 'Rolling',
title: 'Harry Potter',
price: 100,
totalPage: 500,
currentPage: 201,
}

const book2 = { //2
author: 'Dikkens',
title: 'Oliver Twist',
price: 200,
totalPages: 700,
currentPage: 700,
}

const filter = (array, callback) => {
    const result = [];

    for (const item of array) {
        const passed = callback(item)

        if (passed) {
            result.push(item);
        }
    }
    return result;
}


const library = { //1
    books: [book, book2],
    favourite: [book],
    
    buy(bookToBuy) { //1.1.
        let isBookExist = false;

        for (const book of this.books) {
            if (book.title.toLowerCase() === bookToBuy.toLowerCase()) {
                isBookExist = true;
            }
        }
        if (!isBookExist) {
            this.books.push(bookToBuy);
        }
    },
    sell(title) { //1.2.
        for (const book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase()) {
                const indexToRemove = this.books.indexOf(book);
                this.book.splice(indexToRemove, 1);
                return book;
            }
        }
    },
    addToFavourite(book) { //1.3.
        
    },
    removeFromFavourite() { //1.4.
        
    },
    countFavouriteBook() { //1.5.
        return this.favourite.length;
    },
    getFinishedBooks() { //1.6.
        return filter(this.books,(book) =>book.totalPages === book.currentPage) 
    },
    getTotalCost (){ //1.7.

    },
    // (дополнительно) выведет список, книг, который принаддежит данному автору
    getBooksByAuthor(author) {
        return filter(this.books, (book) => book.author === author) 
    }
}
console.log(library.books);
console.log(library.countFavouriteBook());
console.log(library.getFinishedBooks());
console.log(library.getBooksByAuthor('Rolling'))