//If refreshed it will bring site to top
history.scrollRestoration = "manual";
//Nav height calculate
const gap = document.querySelector("#nav").offsetHeight;

//function to find section ids
const sectionIds = [];
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionIds.push(section.id);
});

//function to find section gap from nav
function getSectionGapFromTop() {
  let idsToGap = [];
  sectionIds.forEach((id) => {
    const gapFromSection = document.getElementById(id).offsetTop - gap;
    idsToGap.push(gapFromSection);
  });

  return idsToGap;
}

//on ready of document
document.addEventListener("DOMContentLoaded", function () {
  handleClickScroll();
  handleScrolling();
  handleLinkWithIdsScroll();
});
//on change of id in link
window.addEventListener("hashchange", () => {
  handleLinkWithIdsScroll();
});

//Clicking tabs
handleClickScroll();
function handleClickScroll() {
  const idsToGap = getSectionGapFromTop();
  let nav = document.querySelector("#nav");
  let elements = nav.querySelectorAll("button");
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      window.scrollTo(0, idsToGap[index]);
    });
  });
}

//Handle link with ids
function handleLinkWithIdsScroll() {
  if (document.URL.indexOf("#") > 0) {
    var link = document.URL.split("#");
    let id = "#" + link[1];
    let y = document.querySelector(id).offsetTop - gap;
    window.scrollTo(0, y);
  }
}

//Scrolling
function handleScrolling() {
  window.addEventListener("scroll", function () {
    let nav = document.querySelector("#nav");
    let elements = nav.querySelectorAll("button");
    const idsToGap = getSectionGapFromTop();
    if (window.pageYOffset < idsToGap[0]) {
      elements.forEach((element) => {
        element.classList.remove("active");
      });
    } else {
      makeTabActive(window.pageYOffset, idsToGap, elements);
    }
  });
}

//Add class active
function makeTabActive(currentPoint, gapArr, elements) {
  gapArr.forEach((value, key) => {
    const variableChange = getBuffer(
      currentPoint,
      sections[key].offsetHeight || 0
    );
    if (variableChange > value) {
      elements[key].classList.add("active");
      removeRest(value, gapArr, elements);
    }
  });
}

//Remove class active
function removeRest(value, arr, elements) {
  arr.forEach((ele, i) => {
    if (value != ele) {
      elements[i].classList.remove("active");
    }
  });
}

function getBuffer(currentPoint, value) {
  let ans;
  if (value < 100) {
    ans = currentPoint + value / 30;
  } else if (value < 300) {
    ans = currentPoint + value / 20;
  } else {
    ans = currentPoint + value / 10;
  }
  return ans;
}
