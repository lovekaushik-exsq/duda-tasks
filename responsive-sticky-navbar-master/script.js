//If refreshed it will bring site to top
history.scrollRestoration = "manual";

let idsToGap = [];
const sectionIds = [];

//Nav height calculate
const gap = document.getElementById("nav").offsetHeight;

const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionIds.push(section.id);
});

//Clicking tabs
handleClickScroll();
function handleClickScroll() {
  idsToGap = [];
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

//Coming on link with #
$(document).ready(function () {
  if (document.URL.indexOf("#") > 0) {
    var link = document.URL.split("#");
    scrollId("#" + link[1]);
  }
});
$(window).on("hashchange", function (e) {
  if (document.URL.indexOf("#") > 0) {
    var link = document.URL.split("#");
    scrollId("#" + link[1]);
  }
});

function scrollId(id) {
  window.scrollTo(0, $(id).offset().top - gap + 1);
}

//Scrolling
$(document).ready(function () {
  $(window).scroll(function () {
    let nav = document.querySelector("#nav");
    let elements = nav.querySelectorAll("button");
    idsToGap = [];
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

function removeRest(value, arr, elements) {
  arr.forEach((ele, i) => {
    if (value != ele) {
      elements[i].classList.remove("active");
    }
  });
}
