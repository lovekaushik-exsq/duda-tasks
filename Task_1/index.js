import { getJsonData } from './repository.js';
import * as service from './service.js';

const sortButton = document.querySelector("#sort-btn");
const maxPrice = document.querySelector("#maxprice");
const minPrice = document.querySelector("#minprice");
const filterButton = document.querySelector("#filter-btn");

getJsonData()
.then(data => service.displayHomes(data))
    .catch(err => console.log(err));


sortButton.addEventListener("click", (e) => service.sortHomesByPlanName());

filterButton.addEventListener("click", (e) => service.filterHomesByPriceRange(minPrice.value, maxPrice.value));

    