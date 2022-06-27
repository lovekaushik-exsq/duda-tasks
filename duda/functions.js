import { fetchData, renderData } from "./utility.js";
export const showHomes = async () => {
  let array = await fetchData();
  renderData(array);
};

export const sortHomes = async () => {
  let array = await fetchData();
  array.sort((a, b) => {
    let first = a.PlanName.toLowerCase(),
      second = b.PlanName.toLowerCase();
    let r;
    first < second ? (r = -1) : first > second ? (r = 1) : (r = 0);
    return r;
  });
  renderData(array);
};

export const filterHomes = async (checkedArray) => {
  const min = Math.min(...checkedArray);
  const max = Math.max(...checkedArray);
  let array = await fetchData();
  let ans = [];
  array.forEach((item) => {
    if (item.Price > min && item.Price < max + 200000) {
      ans.push(item);
    }
  });
  if (ans.length == 0) {
    return alert("No results found");
  }
  renderData(ans);
};
