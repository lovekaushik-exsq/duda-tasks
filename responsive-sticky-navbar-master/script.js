const sectionIds = [];
const idsToGap = [];
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionIds.push(section.id);
});
const topGap = document.getElementById(sectionIds[0]).offsetTop;
const navGap = document.getElementById("nav").offsetTop;
const gap = topGap - navGap;
sectionIds.forEach((id) => {
  const gapFromSection = document.getElementById(id).offsetTop - gap;
  idsToGap.push(gapFromSection);
});
handleClickScroll();

$(document).ready(function () {
  $(window).scroll(function () {
    let nav = document.querySelector("#nav");
    let elements = nav.querySelectorAll("button");
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
      value - (gapArr[key - 1] || 0)
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
    ans = currentPoint + value / 45;
  } else if (value < 300) {
    ans = currentPoint + value / 30;
  } else {
    ans = currentPoint + value / 15;
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

function handleClickScroll() {
  let nav = document.querySelector("#nav");
  let elements = nav.querySelectorAll("button");
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      window.scrollTo(0, idsToGap[index]);
    });
  });
}

// let scrollDirection = this.oldScroll < this.scrollY;
// this.oldScroll = this.scrollY;
// const firstSectionTopGap = document.getElementById("first").offsetTop - gap;
// const secondSectionTopGap = document.getElementById("second").offsetTop - gap;
// const thirdSectionTopGap = document.getElementById("third").offsetTop - gap;

// $(document).ready(function () {
//   $(window).scroll(function () {
//     var nav = document.querySelector("#nav");
//     var element = nav.querySelectorAll("a");
//     if (window.pageYOffset < firstSectionTopGap) {
//       element[0].classList.remove("active");
//       element[1].classList.remove("active");
//       element[2].classList.remove("active");
//     }
//     if (window.pageYOffset > firstSectionTopGap) {
//       element[0].classList.add("active");
//       element[1].classList.remove("active");
//       element[2].classList.remove("active");
//     }
//     if (window.pageYOffset > secondSectionTopGap) {
//       element[0].classList.remove("active");
//       element[1].classList.add("active");
//       element[2].classList.remove("active");
//     }
//     if (window.pageYOffset > thirdSectionTopGap) {
//       element[0].classList.remove("active");
//       element[1].classList.remove("active");
//       element[2].classList.add("active");
//     }
//   });
// });
