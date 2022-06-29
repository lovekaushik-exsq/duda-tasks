const sectionIds = [];
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionIds.push(section.id);
});
// const topGap = document.getElementById(sectionIds[0]).offsetTop;
// const navGap = document.getElementById("nav").offsetTop;
const gap = document.getElementById("nav").offsetHeight;

handleClickScroll();

history.scrollRestoration = "manual"

$(document).ready(function () {
  $(window).scroll(function () {
      let nav = document.querySelector("#nav");
      let elements = nav.querySelectorAll("button");
      const idsToGap = [];
        sectionIds.forEach((id) => {
            const gapFromSection = document.getElementById(id).offsetTop - gap;
            idsToGap.push(gapFromSection);
        });
      if (window.pageYOffset < idsToGap[0]) {
          elements.forEach((element) => {
              element.classList.remove("active");
            });
        } else {
            makeTabActive(window.pageYOffset, idsToGap, elements);
        }
    });
});

function makeTabActive(currentPoint, gapArr, elements) {
    gapArr.forEach((value, key) => {
        // const variableChange = getBuffer(
            //   currentPoint,
            //   value - (gapArr[key - 1] || 0)
            // );
            const variableChange = currentPoint + 70;
            if (variableChange > value) {
                elements[key].classList.add("active");
                removeRest(value, gapArr, elements);
            }
        });
    }
    
    //function getBuffer(currentPoint, value) {
        //   let ans;
        //   if (value < 100) {
            //     ans = currentPoint + value / 45;
            //   } else if (value < 300) {
                //     ans = currentPoint + value / 30;
                //   } else {
                    //     ans = currentPoint + value / 15;
                    //   }
                    //   return ans;
                    //}
                    
    function removeRest(value, arr, elements) {
        arr.forEach((ele, i) => {
            if (value != ele) {
                elements[i].classList.remove("active");
    }
});
}

function handleClickScroll() {
    const idsToGap = [];
    sectionIds.forEach((id) => {
      const gapFromSection = document.getElementById(id).offsetTop - gap;
      idsToGap.push(gapFromSection);
    });
    let nav = document.querySelector("#nav");
    let elements = nav.querySelectorAll("button");
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      window.scrollTo(0, idsToGap[index]);
    });
  });
}

