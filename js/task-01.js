// subtask 1: Порахує і виведе в консоль кількість категорій в
// ul#categories,  тобто елементів li.item
const categoriesListEl = document.querySelector("#categories");
const itemsList = categoriesListEl.children;
console.log("Quantity of categories in ul#categories: ", itemsList.length);

// subtask 2: Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) і
// кількість елементів в категорії(усіх < li >, вкладених в нього).
const itemsListArray = [...itemsList];

itemsListArray.forEach(function (item) {
  console.log("Title text content: ", item.firstElementChild.textContent);
  console.log(
    "Quantity of all elements inside li: ",
    item.querySelectorAll("li").length
  );
});
