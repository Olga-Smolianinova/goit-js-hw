// Training
// const person = ["Иван Иванов", "Петр Петров", "Сидр Сидоров"];

// person[0] = "Василий Иванов";
// console.log(person);
// // let result = 0;

// let border = 0;

// // const cutName = person.join(" ");
// // console.log(cutName);

// // for (let i = 0; i < cutName.length; i += 1) {
// //   console.log(cutName[i]);
// // }

// for (name of person) {
//   border = name.indexOf(" ");

//   // console.log(border);
//   console.log(name.slice(border));
// }
// console.log(person);

//Conspect / Function

// const add = function (a, b, c) {
//   return a + b + c;
// };

// Возведение в  степень
// let a = 2; // osnovanie
// let b = 5; // stepen
// let r = 1; // resultat

// for (let i = 1; i <= b; i += 1) {
//   r = r * a;
//   // console.log(i);
//   // console.log(r);
// }

// console.log(r);

// let a = 2; // osnovanie
// let b = 5; // stepen

// const findPowerOfNumber = function (a, b) {
//   let r = 1; // resultat

//   for (let i = 1; i <= b; i += 1) {
//     r = r * a;
//     // console.log(i);
//     // console.log(r);
//   }
//   return r;
// };
// let r1 = findPowerOfNumber(a, b);
// console.log(r1);

// r1 = findPowerOfNumber(3, 3);
// console.log(r1);

//????? Функция может либо вызвать побочные эффекты (изменять глобальные переменные), либо возвращать результат своей работы, зависит от задачи. В зависимости от того, какой фрагмент кода будет помещен внутри функции, произойдет либо возврат вычисленного значения, либо изменение состояния программы, иногда оба.

// 1 Объявление и вызов функции
// const add = function (a, b) {
//   console.log("a:", a);
//   console.log("b:", b);

//   const result = a * b;
//   return result;
// };

// // add(3, 3);
// // console.log(add(5, 5));

// const r1 = add(3, 3);
// console.log(r1);

// const r2 = add(5, 5);
// console.log(r2);

// 2 Как перебрать цикл через функцию
// const friends = ["Anna", "Alexandra", "Olga", "Valentina"];
// const number = [1, 2, 3, 4, 5];

// // Объявление функции
// const array = function (items) {
//   for (items of items) {
//     console.log(items);
//   }
// };
// // Вызов функции
// array(friends);
// array(number);
// array(["разная", "фигня", "для", "тренировки", "функций"]);

// 3 Как выполнить поиск элемента
// const friends = ["Anna", "Alexandra", "Olga", "Valentina"];

// const findFriend = function (allFriends, name) {
//   console.log(allFriends);
//   console.log(name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return "нашли такого друга";
//     }
//   }
//   return "Не нашли такого друга";
// };

// const r1 = findFriend(friends, "Olga");
// console.log(r1);
// const r2 = findFriend(friends, "Nataly");
// console.log(r2);

// 3.1 Как выполнить поиск элемента через includes
// const findFriend = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);

//   return isInFriends ? "нашли такого друга" : "не нашли такого друга";
// };

// const r1 = findFriend(friends, "Olga");
// console.log(r1);
// const r2 = findFriend(friends, "Nataly");
// console.log(r2);

// 4 Как привести строку в новую с разделителем
// // const title = "Top benefits of React framework";
// // const words = title.toLowerCase().split(" ");
// // console.log(words);
// // const slug = words.join("-");
// // console.log(slug);

// const slugify = function (string) {
//   const words = string.toLowerCase().split(" ");
//   const slug = words.join("-");

//   // console.log(slug);
//   return slug;
// };

// a)
// // slugify("Top benefits of React framework");
// // slugify("Data Protection and protecting your users in light of GDPR");

// const slug1 = slugify("Top benefits of React framework");
// console.log(slug1);

// const slug2 = slugify(
//   "Data Protection and protecting your users in light of GDPR"
// );
// console.log(slug2);

// b)
// const articles = [
//   "Top benefits of React framework",
//   "Data Protection and protecting your users in light of GDPR",
//   "Bla bla bla bla bla bla",
// ];

// const slugsArraw = [];

// for (const article of articles) {
//   const slug = slugify(article);
//   console.log(slug);

//   slugsArraw.push(slug);
// }
// console.log(slugsArraw);

// 5 Как найти самое меньшее число найти в массиве
// const numbers = [1, 56, 37, 89, 132, 75, 452];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }
// console.log(smallestNumber);

//Теперь выразим через функцию
// const numbers = [1, 56, 37, 89, 132, 75, 452];

// const findSmallestNumber = function (elements) {
//   let smallestNumber = elements[0];

//   for (let i = 1; i < elements.length; i += 1) {
//     if (elements[i] < smallestNumber) {
//       smallestNumber = elements[i];
//     }
//   }
//   return smallestNumber;
// };
// const r1 = findSmallestNumber(numbers);
// console.log(r1);

// // или такая запись
// console.log(findSmallestNumber([2, 5, 8, 9]));

// 6 Как удалить элемент из массива
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const removeCard = function (allCards, elementToRemove) {
//   const index = allCards.indexOf(elementToRemove);

//   // если ввести неверный вид карточки(например "card-322" ), по итогу удалится карточка -1, то есть 1-я с конца массива. Чтобы этого не случилось пропишем условие:
//   if (index === -1) {
//     console.log("Такой карточки нет");
//     return;
//   }

//   allCards.splice(index, 1);
// };

// removeCard(cards, "card-3");
// console.log(cards);

// removeCard(cards, "card-322");

//  6.1 Как добавить элемент в массив
// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
// console.log(cards);

// const addCard = function (allCards, elementToInsert, index) {
//   allCards.splice(index, 0, elementToInsert);
// };

// addCard(cards, "card - 100", 2);
// console.log(cards);

// Arguments (кроме стрелочных ф-ций)

// const fn = function () {
//   console.log(arguments);

//   // Аргументы можно перебрать с помощью цикла:
//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
//   }
// };
// fn(3, 4, 5);

//Если нужно преобразовать аргуметы (это псевдомассив) в массив
// Метод 1 (Old school):
// Array - функция - конструктор, базовый родитель для всех массивов, которые создаются
// const fn = function () {
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);
// };
// fn(3, 4, 5);

// Метод 2 (более современный инструмент):
// Используем в параметрах функции - операция сбора или операция rest
// const fn = function (...args) {
//   console.log(arguments);
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };
// const r1 = fn(3, 4, 5);
// console.log(r1);

//  7 Как добавить тэг к строке на примере Arguments
// const posts = ["post-1", "post-2", "post-3", "post-4", "post-5"];
// console.log(posts);

// const tag = "#jqueryrules";

// const postWithTag = [];

// for (const post of posts) {
//   postWithTag.push(`${post}${tag}`);
// }
// console.log(postWithTag);

// а теперь +функция
// const addTag = function (tag, a, ...args) {
//   console.log(tag);
//   console.log(a);
//   // console.log(arguments);
//   console.log(args);
// };

// addTag("#jqueryrules", "post-1", "post-2");
// addTag("#react", "post-1", "post-2", "post-3");
// +
// const addTag = function (tag, ...args) {
//   const postWithTag = [];

//   for (const arg of args) {
//     postWithTag.push(`${arg}${tag}`);
//   }
//   return postWithTag;
// };
// console.log(addTag("#jqueryrules", "post-1", "post-2"));
// console.log(addTag("#react", "post-1", "post-2", "post-3"));
