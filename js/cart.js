/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */
const cart = {
  // Создание корзины
  items: [],
  getItems() {
    return this.items;
  },

  // Добавить в корзину; изменить количество товаров
  add(product) {
    for (const item of this.items) {
      console.log(item);
      if (item.name === product.name) {
        console.log("Такой продукт уже есть, увеличиваем количество!");
        item.quantity += 1;
        return;
      }
    }

    console.log("Новый продукт, добавляем в корзину!");
    product.quantity = 1;
    this.items.push(product);
  },

  // Удалить товар из корзины
  remove(productName) {
    console.log(productName);
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log("Нашли, удаляем!");
        console.log("Индекс для удаления:", i);

        this.items.splice(i, 1);
      }
    }
  },

  // Полностью очищает корзину
  clear() {
    this.items = []; //правильно делать так
    // this.items.length = 0; //не далать так!!!
    console.log("[]");
  },

  // Подсчитывает общую стоимость товара в корзине
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      console.log(item);
      total += item.price * item.quantity;
    }
    return total;
  },

  // Увеличить количество после нажатия на +
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },

  // Уменьшить количество после нажатия на -
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
console.table(cart.getItems());

// cart.remove("🍎");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

console.log(cart.increaseQuantity("🍎"));
console.table(cart.getItems());

console.log(cart.decreaseQuantity("🍋"));
console.table(cart.getItems());

console.log("Total:", cart.countTotalPrice());

export default cart;
