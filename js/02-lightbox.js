import { galleryItems } from "./gallery-items.js";
// Change code below this line
const parent = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const element = `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`;
  parent.insertAdjacentHTML("beforeend", element);
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
