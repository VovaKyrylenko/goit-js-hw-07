import { galleryItems } from "./gallery-items.js";
// Change code below this line
const parent = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const wrapper = document.createElement("div");
  wrapper.className = "gallery__item";
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.href = item.original;
  const img = document.createElement("img");
  img.src = item.preview;
  img.alt = item.description;
  img.className = "gallery__image";
  img.setAttribute("data-source", item.original);
  link.appendChild(img);
  wrapper.appendChild(link);
  parent.appendChild(wrapper);
});

parent.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    let lightbox = new SimpleLightbox(".gallery a");
  }
});
console.log(galleryItems);
