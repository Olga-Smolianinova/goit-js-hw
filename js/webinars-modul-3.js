// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: true },
//   { name: "Ajax", online: false },
// ];

// console.table(friends);

//  Функция "Найти друга"
// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     // console.log(friend);

//     if (friend.name === name) {
//       return "Found!";
//     }
//   }
//   return "Don`t found!";
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//  Функция "Найти имена всех друзей"
// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));

// // Свойства объектов
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const { name = "", stars = 1, capacity = 0 } = hotel;

// console.log(stars);

// console.log("Name: ", name);
// console.log("Stars: ", stars);
// console.log("Capacity: ", capacity);

// const showHotelInfo = function (hotelStats) {
//   console.log(hotelStats);

//   const { name, stars, capacity, status = 0 } = hotelStats;
//   console.log("Name: ", name);
//   console.log("Stars: ", stars);
//   console.log("Capacity: ", capacity);
//   console.log("Status: ", status);
// };
// showHotelInfo(hotel);

// // Задача посчитать количество каждой буквы в строке
// const lorem =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dignissimos ex consectetur modi quod nisi nam laboriosam suscipit labore ut. Sint fugit ex dolorum nemo quia odio excepturi quasi amet!";

// const report = {};

// for (const letter of lorem.toLocaleLowerCase()) {
//   if (" .,;!#".includes(letter)) {
//     continue;
//   }

//   if (letter in report) {
//     report[letter] += 1;
//   } else {
//     report[letter] = 1;
//   }
// }
// console.log(report);

// Compute Consumer Price Index (CPI)
    const stringBasket = '1 hamburger, 4 hotdog, 2 coke, 4 milk'
    

    // Упрощаем запись. Сначала посчитаем без года:
    const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 };
   
     const data = {
      2014: {hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
      2015: {hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
      2016: {hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 }
    }

const parseBasket = (basket) => {
    const goods = basket.split(', ');
    const result = {};

    // 1.Перепишем для удобства 
    // '1 hamburger, 4 hotdog, 2 coke, 4 milk' 
    // в 
    // hamburger: 1, 
    // hotdog: 4,
    // coke: 2,
    // milk: 4
    for (const good of goods) {
        // good.split(' ') // => ['1', 'hamburger'] //разбиваем строку с помощью split(' ') и чтобы строку переписать в формате  ['1', 'hamburger'] - используем деструктуризацию, где '1' - count, а 'hamburger' - name. Получается такая запись:
        const [count, name] = good.split(' ');

        result[name] = Number(count);
    }
    
    return result;
};

console.log(parseBasket('1 hamburger, 4 hotdog, 2 coke, 4 milk'));

// 2. Берем строку которая получилась и дальше уже работаем с ней. Пишем функцию:
const basket = parseBasket(stringBasket);

const countBusket = (basket, year ) => {
    const busketEnteries = Object.entries(basket);
    let sum = 0;
    
    for (const busketEntry of busketEnteries) {
        console.log(busketEntry);
        
        // деструктиризация
        const [name, count] = busketEntry;

        // Считаем
        const priceFromYear = year[name];
        sum += priceFromYear * count;
    }
    return sum;
};

// countBusket(basket, data)
console.log(countBusket(basket, yearData));

// 3. Вывести сколько пользователь тратил по годам
const getBasketPerYears = (basket, data) => {
  // write some code to get solution 
  // use existing functions
  // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
  // const prices = { 
  //     2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
  //     2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
  //     2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
  // }
}
console.log(getBasketPerYears(basket, data))