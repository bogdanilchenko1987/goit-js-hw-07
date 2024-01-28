import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const isActive = evt.target.classList.contains("gallery__image");

  if (!isActive) {
    return;
  }

  const originalImage = evt.target.dataset.source;

  lightboxFunction(originalImage);

  //   const instance = basicLightbox.create(`
  //     <img src="${originalImage}" width="800" height="600">
  // `);

  //   instance.show();
}

function createGallery(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function lightboxFunction(img) {
  const instance = basicLightbox.create(`
    <img src="${img}" width="800" height="600">
`);

  instance.show();
}
