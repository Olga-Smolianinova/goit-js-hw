import cart from "./cart.js";
console.log(cart);

// Показать содержимое корзины
document.querySelector(".js-show-cart").addEventListener("click", () => {
  console.table(cart.getItems());
  console.log("Total:", cart.countTotalPrice());
});

// Добавить 🍎
document
  .querySelector("button[data-product='🍎']")
  .addEventListener("click", cart.add.bind(cart, { name: "🍎", price: 50 }));
