// Створити об'єкт піци з полями і методами.
// В об'єкті мають бути такі поля і методи:
// 1. Поле для збереження розміру піци;
// 2. Поле для збереження списку добавок;
// 3. Поле для збереження списку соусів;
// 4. Метод для додавання добавки (можна додати добавку; якщо вона відсутня, інакше показувати помилку);
// 5. Метод для додавання соусу (можна додати соус; якщо він відсутній, інакше показувати помилку; також помилка показується, якщо пробуємо видалити добавку, а там ще жодної немає);
// 6. Метод для видалення добавки (можна видалити добавку; якщо вона присутня в піці, інакше показувати помилку; також помилка показується, якщо пробуємо видалити соус, а там ще жодного немає);
// 7. Метод для видалення соусу (можна видалити соус, якщо він присутній в піці, інакше показувати помилку);
// 8. Метод для розрахунку загальної ціни піци (розмір+добавки+соус; ціна заокруглена до двох знаків після коми);
// 9. Метод для розрахунку загальної кількості калорій піци (розмір+добавки+соус);
// 10. Метод, який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів; якщо піца валідна, інакше показувати помилку);
// 11. Метод вибору розміру піци (розмір піци можна змінити в будь-який момент);
// 12. Метод, що показує час приготування в хвилинах в задежності від складності піци;
// 13. Метод валідації піци, який поверне true, якщо піца відповідає вимогам (вибраний розмір піци є мінімум одна добавка, і мінімум один соус), інакше - false (і виводить строку чого не вистачає (коржа, добавки чи соусу)) (використовувати this).
// Створити всі методи і перевірити чи вони працюють.

const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};

const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

//  1, 2, 3, 4, 5;
const pizza = {
  // 1
  size: null,
  // 2
  stuffings: [],
  //   3
  sauces: [],
  //   4
  addStuffing(stuffing) {
    if (
      !this.stuffings.includes(stuffing) &&
      stuffing.toUpperCase() in STUFFING
    ) {
      this.stuffings.push(stuffing.toUpperCase());
    }
  },
  //   6
  removeStuffing(stuffing) {
    if (this.stuffings.includes(stuffing)) {
      const indexToDelete = this.stuffings.indexOf(stuffing);

      this.stuffings.splice(indexToDelete, 1);
    }
  },
  //   5
  addSauce(sauce) {
    if (!this.sauces.includes(sauce) && sauce.toUpperCase() in SAUCES) {
      this.sauces.push(sauce.toUpperCase());
    }
  },
  //   7
  removeSauce(sauce) {
    if (this.sauces.includes(sauce)) {
      const indexToDelete = this.sauces.indexOf(sauce);

      this.sauces.splice(indexToDelete, 1);
    }
  },
  //   8, 9
  getTotalProperty(property) {
    const getPropertyForSize = () => SIZES[this.size][property];

    const getPropertyForSauces = () => {
      let total = 0;

      for (const sauce of this.sauces) {
        const prop = SAUCES[sauce][property];

        total += prop;
      }

      return total;
    };

    const getPropertyForStuffing = () => {
      let total = 0;

      for (const stuffing of this.stuffings) {
        const prop = STUFFING[stuffing][property];

        total += prop;
      }

      return total;
    };

    const forSize = getPropertyForSize();
    const forSauces = getPropertyForSauces();
    const forStuffing = getPropertyForStuffing();

    console.log(forSize + forSauces + forStuffing);
    return forSize + forSauces + forStuffing;
  },
  //   10
  getPizzaConfig() {
    return {
      price: this.getTotalProperty("price"),
      cal: this.getTotalProperty("cal"),
      time: this.getTotalProperty("time"),
    };
  },
};

pizza.size = "BIG";

pizza.addStuffing("CHICKEN");
pizza.addStuffing("cheese");
pizza.addStuffing("BEACON");
console.log(pizza.stuffings);

pizza.addSauce("KetChup");
console.log(pizza.sauces);

pizza.removeStuffing("BEACON");
console.log(pizza.stuffings);

pizza.addSauce("BOLOGNESE");
pizza.removeSauce("KETCHUP");
console.log(pizza.sauces);

console.log(pizza.getPizzaConfig());
