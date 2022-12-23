import { galleryItems } from "./gallery-items.js";

// Change code below this line
const parent = document.querySelector(".gallery");
galleryItems.forEach((item) => {
  const element = `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`;
  parent.insertAdjacentHTML("beforeend", element);
});

parent.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(
      `<img src="${evt.target.getAttribute("data-source")}">`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", (event) => {
            if (event.code == "Escape") {
              instance.close();
            }
          });
        },
      }
    );
    instance.show();
  }
});
