export {sortData}

function sortData(data)
{
   var sortedData = data.sort(function(a, b) {         
      var planNameA = a.data.PlanName.toLowerCase(); 
      var planNameB = b.data.PlanName.toLowerCase();  
      if (planNameA < planNameB) {
         return -1; //nameA comes first
      }
      if (planNameA > planNameB) {
         return 1; // nameB comes first
      }
         return 0;  // names must be equal
      });
   return sortedData;
}