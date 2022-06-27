import { getJsonData } from './repository.js';
import { sortData } from './Utility.js';
export {displayHomes, sortHomesByPlanName, filterHomesByPriceRange}

var isSorted = false;
var isFilteredByPrice = false;
var filteredData;

function displayHomes(data)
{
    let homeData ="";
    data.map((values) => {
        homeData += `<div class="homes">
        <h2>HomeId : ${values.data.HomeId}</h2>
        <h3>Plan Name : ${values.data.PlanName}</h3>
        <h3>Price : ${values.data.Price}</h3>
        <h3>Address : ${values.data.Addr +", "+ values.data.City +", "+ values.data.County + ", " + values.data.State} </h3>
        <h3>Listing Number : ${values.data.ListingNumber}</h3>
        <img src=${values.data.Thumb1} alt=img, class="images">
        <img src=${values.data.Thumb2} alt=img, class="images">
        </div>`
    });
    document.getElementById("root").innerHTML = homeData;
}

async function sortHomesByPlanName(data)
{
    if (isFilteredByPrice) {
        var data = filteredData;
    }
    else {
        var data = await getJsonData();
    }
    var sortedHomes = sortData(data);
    displayHomes(sortedHomes);   
    isSorted = true;           
}

async function filterHomesByPriceRange(min ,max)
{
    if(max == "")
    {
        alert("Enter Price Range");
        return;
    }
    else {
        var data = await getJsonData();
    }    
    min="0";
    filteredData = data.filter(function(home) {
                    return home.data.Price <= parseInt(max) && home.data.Price >= parseInt(min)
                });
    if (isSorted)
    displayHomes(sortData(filteredData));
    else            
    displayHomes(filteredData);
    isFilteredByPrice = true;
}
