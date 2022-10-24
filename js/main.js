import "../css/style.css"
import "../css/skin.css"



const moreOptions = document.querySelector("#bmore");
const mobileMenu = document.querySelector(".links");
const bShowMobileLinks = document.querySelector("#bmenu");
const moreMenu = document.querySelector(".more .menu");

/* Menu */
bShowMobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  mobileMenu.classList.toggle("show");
});

/* More */
moreOptions.addEventListener("click", (e) => {
  e.preventDefault();
  moreMenu.classList.toggle("show");
});

const videos = [
  {
    id: "k4NXV40gW7k",
  },
  {
    id: "kjN1eWhzPeA",
  },
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "Dwby1K4xLE0",
  },
  {
    id: "u7oRIRn3mc4",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const bLeft = document.querySelector(".left");
const bRight = document.querySelector(".right");
let current = 0;

bRight.addEventListener("click", (e) => {
  let changed = current;

  current = current + 1 < videos.length ? current + 1 : current;

  if (current != changed) {
    renderCurrentVideo(videos[current].id);
  }
});

bLeft.addEventListener("click", (e) => {
  let changed = current;

  current = current - 1 >= 0 ? current - 1 : current;

  if (current != changed) {
    renderCurrentVideo(videos[current].id);
  }
});

renderCurrentVideo(videos[current].id);
renderVideos();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="Halo Infinite - Tráiler E3 2019" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function renderVideos() {
  const content = videos.map((video, index) => {
    return ` 
  <div class="item">
  <a href="#" data-id ="${index}">
  <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
  </a>
  </div>`;
  });

  videosContainer.innerHTML = content;

  document.querySelectorAll(".item a").forEach((item) =>
    item.addEventListener("click", (e) => {
      e.preventDefault();

const id = +item.getAttribute("data-id")
current = id
      renderCurrentVideo(videos[current].id)
    })
  );
}
