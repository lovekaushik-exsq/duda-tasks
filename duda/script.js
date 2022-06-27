import { sortHomes, showHomes, filterHomes } from "./functions.js";

const listHomes = document.querySelectorAll(".listHomes");
const sort = document.getElementById("sortHomes");
const filter = document.getElementById("filterHomes");
const form = document.getElementById("form");

showHomes();

listHomes.forEach((ele) => {
  ele.addEventListener("click", async () => {
    form.reset();
    await showHomes();
  });
});

sort.addEventListener("click", async () => {
  form.reset();
  await sortHomes();
});

filter.addEventListener("click", async () => {
  const markedCheckBox = document.getElementsByName("price");
  let checkedPrice = [];
  for (let checkbox of markedCheckBox) {
    if (checkbox.checked) checkedPrice.push(checkbox.value);
  }
  if (checkedPrice.length === 0) return alert("No filter applied");
  await filterHomes(checkedPrice);
});
