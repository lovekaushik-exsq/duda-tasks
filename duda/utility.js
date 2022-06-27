const url =
  "https://duda-api.newhomesource.com/api/v2/Search/dudahomes?partnerid=8684&builderid=10430&pagesize=100&IncludeSchools=1&SortBy=Comm&IncludeSalesOffice=true&IncludePromos=1&IncludeEvents=1";
export async function fetchData() {
  try {
    let response = await fetch(url);
    if (response.status === 200) {
      let data = await response.json();
      console.log(data);
      let arr = [];
      data.forEach((data) => arr.push(data.data));
      console.log(arr);
      return arr;
    }
  } catch (error) {
    console.log(error);
  }
}

export const renderData = (array) => {
  let html = "";
  array.forEach((data, i) => {
    let htmlSegment = `
    <div class="col-sm-3">
    <div class="card">
    <a target="_blank" href="${data.Thumb1}">
    <img id='index${i}' src="./images/lazy-image.jpg" data-img="${data.Thumb1}" class="card-img-top responsive" alt="home image">
    </a>
    <div class="card-body">
    <h5 class="card-title">HomeId: ${data.HomeId}</h5>
    <p class="card-text"></p>
    <p class="card-text">Addr: ${data.Addr}</p>
    <p class="card-text">City: ${data.City}</p>
    <p class="card-text">County: ${data.County}</p>
    <p class="card-text">MarketName: ${data.MarketName}</p>
    <p class="card-text">PlanName: ${data.PlanName}</p>
    <p class="card-text">Price: $${data.Price}</p>
    </div>
    </div>
    </div>
      `;

    html += htmlSegment;
  });

  let container = document.querySelector("#container");
  container.innerHTML = html;

  //for practice
  lazyLoad();
};

export const lazyLoad = () => {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        entry.target.className === "card-img-top responsive"
      ) {
        let imageUrl = entry.target.getAttribute("data-img");
        if (imageUrl) {
          entry.target.src = imageUrl;
          observer.unobserve(entry.target);
        }
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);
  const arr = document.querySelectorAll("img.card-img-top");
  arr.forEach((v) => {
    observer.observe(v);
  });
};
