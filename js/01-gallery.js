import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener("click", onClick);

function onClick(evt) {
  // prevent default moves, for example 'download img'
  evt.preventDefault();

  const isActive = evt.target.classList.contains("gallery__image");

  if (!isActive) {
    return;
  }

  // open modal with lightbox

  const originalImage = evt.target.dataset.source;
  // lightboxFunction(originalImage);
  const instance = basicLightbox.create(`
      <img src="${originalImage}" width="800" height="600">
  `);
  instance.show();

  // close on Escape
  galleryList.addEventListener("keydown", onCloseEscape);

  function onCloseEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
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

// function lightboxFunction(img) {
//   const instance = basicLightbox.create(`
//     <img src="${img}" width="800" height="600">
// `);

//   instance.show();
// }

// function onCloseEscape(evt) {
//   const visible = basicLightbox.visible();

//   if (visible) {
//   if (evt.code === "Escape") {
//     instance.close();
//   }
// }
// }
