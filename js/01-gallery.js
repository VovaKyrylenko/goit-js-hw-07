import { galleryItems } from "./gallery-items.js";

// Change code below this line
const parent = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const link = document.createElement("a");
  link.className = "gallery__link";
  link.insertAdjacentHTML(
    "beforeend",
    `<img src='${item.preview}' class="gallery__image" alt="${item.description}"/>`
  );
  parent.appendChild(link);
});

parent.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("gallery__image")) {
    galleryItems.forEach((item) => {
      if (evt.target.src === item.preview) {
        const instance = basicLightbox.create(
          `<img src="${item.original}" class="gallery__item">`
        );
        instance.show();
        console.log("instance:", instance.show());
      }
    });
  }
});
console.log(galleryItems);
