// Вариант через prompt

// let number = prompt("Введите число");
// number = Number(number);

// let power = prompt("Введите степень");
// power = Number(power);

// console.log(number);
// console.log(power);

// const result = Math.pow(number, power);
// console.log(result);

// Вариант через input
// Код из HTML
//  <label>Number
//       <input type="number" name="number" />
//     </label>
//   <label>Index
//       <input type="number" name="index" />
//     </label>
//  <button type="button">Count</button>

const numberInputRef = document.querySelector('input[ name="number"]');
const indexInputRef = document.querySelector('input[ name="index"]');
const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", () => {
  console.log(numberInputRef.value);
  console.log(indexInputRef.value);
  //   console.log("CLICK!");

  const number = Number(numberInputRef.value);
  const index = Number(indexInputRef.value);

  const result = Math.pow(number, index);
  console.log(result);
});
